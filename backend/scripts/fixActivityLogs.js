const fs = require('fs');
const path = require('path');

// Path to the controller file
const controllerPath = path.join(__dirname, '..', 'controllers', 'examController.js');

// Read the controller file
let content = fs.readFileSync(controllerPath, 'utf8');

// Find all ActivityLog.create occurrences and add action field if missing
const regex = /await ActivityLog\.create\(\{([\s\S]*?)\}\);/g;

let match;
let modifiedContent = content;
let count = 0;

while ((match = regex.exec(content)) !== null) {
  // Get the content inside ActivityLog.create({})
  const logContent = match[1];
  
  // Check if it already has an action field
  if (!logContent.includes('action:')) {
    // Extract the activity field to use as action
    let action = 'system_activity';
    const activityMatch = /activity:\s*`([^`]*)`/.exec(logContent);
    if (activityMatch) {
      // Convert activity to a valid action name
      action = activityMatch[1]
        .toLowerCase()
        .replace(/^(created|updated|deleted|processed|published|submitted|started) .*$/, '$1')
        .replace(/[^a-z]/g, '_')
        .substring(0, 20);
    }
    
    // Create the replacement string with action added
    const replacement = logContent.trim() + ',\n      action: \'' + action + '\'';
    
    // Replace in the file content
    modifiedContent = modifiedContent.replace(
      `await ActivityLog.create({${logContent}});`, 
      `await ActivityLog.create({${replacement}});`
    );
    
    count++;
  }
}

// Also fix ErrorLog instances that might be missing action
const errorLogRegex = /await ErrorLog\.create\(\{([\s\S]*?)\}\);/g;
while ((match = errorLogRegex.exec(content)) !== null) {
  // Get the content inside ErrorLog.create({})
  const logContent = match[1];
  
  // Check if it already has an action field
  if (!logContent.includes('action:')) {
    // Create the replacement string with action added
    const replacement = logContent.trim() + ',\n      action: \'error\'';
    
    // Replace in the file content
    modifiedContent = modifiedContent.replace(
      `await ErrorLog.create({${logContent}});`, 
      `await ErrorLog.create({${replacement}});`
    );
    
    count++;
  }
}

// Write the modified content back to the file
fs.writeFileSync(controllerPath, modifiedContent, 'utf8');

console.log(`Fixed ${count} ActivityLog/ErrorLog occurrences in ${controllerPath}`);
