import path from "path";
import fs from "fs/promises";

/**
 * Get the full file path to a user's template.
 * @param {string} userId - The user's ID
 * @param {string} templateType - e.g. 's1-notice', 'acknowledgement'
 * @returns {Promise<string>} - The absolute path to the template file
 * @throws Will throw if the template does not exist
 */
export async function getUserTemplatePath(userId, templateType) {
  const baseDir = path.join(process.cwd(), "uploads", "templates", userId);
  const fileName = `${templateType}.docx`;
  const filePath = path.join(baseDir, fileName);

  try {
    await fs.access(filePath); // Check if file exists
    return filePath;
  } catch (err) {
    throw new Error(`Template not found: ${filePath}`);
  }
}
