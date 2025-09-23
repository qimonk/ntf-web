#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Nomor WhatsApp yang benar
const CORRECT_NUMBER = '62895340042060';
const CORRECT_NUMBER_FORMATS = [
  '62895340042060',
  '+62895340042060',
  '0895340042060',
  '+62 895-3400-42060'
];

// Nomor lama yang harus dihapus (contoh - tidak ada di project)
const OLD_NUMBERS_EXAMPLES = [
  '6281234567890',
  '081234567890',
  '621234567890',
  '1234567890'
];

// Format WhatsApp URL yang valid
const VALID_WHATSAPP_FORMATS = [
  'wa.me/',
  'api.whatsapp.com/send?phone='
];

function scanDirectory(dirPath) {
  const results = {
    oldNumbersFound: [],
    correctNumbersFound: [],
    whatsappUrls: [],
    errors: []
  };

  function scanFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const fileName = path.basename(filePath);
      
      // Cek nomor lama (contoh - seharusnya tidak ada di project)
      OLD_NUMBERS_EXAMPLES.forEach(oldNumber => {
        if (content.includes(oldNumber)) {
          results.oldNumbersFound.push({
            file: filePath,
            number: oldNumber,
            line: findLineNumber(content, oldNumber)
          });
        }
      });

      // Cek nomor benar
      CORRECT_NUMBER_FORMATS.forEach(correctNumber => {
        if (content.includes(correctNumber)) {
          results.correctNumbersFound.push({
            file: filePath,
            number: correctNumber,
            line: findLineNumber(content, correctNumber)
          });
        }
      });

      // Cek URL WhatsApp
      VALID_WHATSAPP_FORMATS.forEach(format => {
        const regex = new RegExp(format + '[0-9]+', 'g');
        const matches = content.match(regex);
        if (matches) {
          matches.forEach(match => {
            results.whatsappUrls.push({
              file: filePath,
              url: match,
              line: findLineNumber(content, match)
            });
          });
        }
      });

    } catch (error) {
      results.errors.push({
        file: filePath,
        error: error.message
      });
    }
  }

  function findLineNumber(content, searchTerm) {
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes(searchTerm)) {
        return i + 1;
      }
    }
    return 'Unknown';
  }

  function walkDirectory(currentPath) {
    const files = fs.readdirSync(currentPath);
    
    for (const file of files) {
      const filePath = path.join(currentPath, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and .git
        if (file !== 'node_modules' && file !== '.git') {
          walkDirectory(filePath);
        }
      } else {
        // Only scan certain file types
        const ext = path.extname(file).toLowerCase();
        if (['.js', '.jsx', '.ts', '.tsx', '.html', '.css'].includes(ext)) {
          // Skip validation script itself
          if (file !== 'validate-whatsapp.js') {
            scanFile(filePath);
          }
        }
      }
    }
  }

  walkDirectory(dirPath);
  return results;
}

function main() {
  console.log('🔍 Scanning WhatsApp numbers in project...\n');
  
  const projectPath = process.cwd();
  const results = scanDirectory(projectPath);

  console.log('📊 SCAN RESULTS:\n');

  // Tampilkan nomor lama yang ditemukan
  if (results.oldNumbersFound.length > 0) {
    console.log('❌ ERROR: Nomor lama masih ditemukan!');
    console.log('─'.repeat(50));
    results.oldNumbersFound.forEach(item => {
      console.log(`File: ${item.file}`);
      console.log(`Nomor lama: ${item.number}`);
      console.log(`Line: ${item.line}`);
      console.log('─'.repeat(30));
    });
    console.log('\n⚠️  "Nomor lama masih ditemukan, update belum berhasil."\n');
    process.exit(1);
  } else {
    console.log('✅ Tidak ada nomor lama yang ditemukan');
  }

  console.log('\n');

  // Tampilkan nomor benar yang ditemukan
  if (results.correctNumbersFound.length > 0) {
    console.log('✅ Nomor WhatsApp benar ditemukan:');
    console.log('─'.repeat(50));
    const uniqueFiles = [...new Set(results.correctNumbersFound.map(item => item.file))];
    uniqueFiles.forEach(file => {
      console.log(`📄 ${file}`);
      const numbersInFile = results.correctNumbersFound.filter(item => item.file === file);
      numbersInFile.forEach(item => {
        console.log(`   Line ${item.line}: ${item.number}`);
      });
    });
  }

  console.log('\n');

  // Tampilkan URL WhatsApp
  if (results.whatsappUrls.length > 0) {
    console.log('🔗 URL WhatsApp ditemukan:');
    console.log('─'.repeat(50));
    const uniqueUrls = [...new Set(results.whatsappUrls.map(item => item.url))];
    uniqueUrls.forEach(url => {
      console.log(`📱 ${url}`);
      const filesWithUrl = results.whatsappUrls.filter(item => item.url === url);
      filesWithUrl.forEach(item => {
        console.log(`   ${item.file} (Line ${item.line})`);
      });
    });
  }

  console.log('\n');

  // Tampilkan errors
  if (results.errors.length > 0) {
    console.log('⚠️ Errors encountered:');
    console.log('─'.repeat(50));
    results.errors.forEach(error => {
      console.log(`File: ${error.file}`);
      console.log(`Error: ${error.error}`);
      console.log('─'.repeat(30));
    });
  }

  // Final validation
  if (results.oldNumbersFound.length === 0 && results.correctNumbersFound.length > 0) {
    console.log('🎉 SUCCESS!');
    console.log('✅ "Nomor WhatsApp berhasil diperbarui."');
    console.log(`\n📱 Total nomor benar ditemukan: ${results.correctNumbersFound.length}`);
    console.log(`🔗 Total URL WhatsApp ditemukan: ${results.whatsappUrls.length}`);
    console.log(`🚀 Semua menggunakan nomor: ${CORRECT_NUMBER}`);
  }
}

if (require.main === module) {
  main();
}

module.exports = { scanDirectory };