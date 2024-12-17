import { execSync } from 'child_process';
import { platform } from 'os';

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __plaformWindows = platform() === 'win32';
const __opensslPath = join(dirname(fileURLToPath(import.meta.url)), "openssl", "bin", "openssl.exe");

/**
 * Executes an OpenSSL command synchronously across different platforms.
 *
 * @description
 * This function runs OpenSSL commands with platform-specific handling:
 * - On Windows, it uses the packaged version of OpenSSL
 * - On other platforms (e.g., Linux, macOS), it uses the locally installed OpenSSL
 *
 * @param {string} opensslCommand - The OpenSSL command to be executed, including any arguments.
 * @param {Object} [execOptions] - Optional execution options for the synchronous command, Defaults to UTF-8 encoding if not provided.
 * @param {string} [execOptions.encoding='utf-8'] - The encoding to use for command output.
 * @param {string} [execOptions.cwd] - Current working directory for the command execution.
 * @param {Object} [execOptions.env] - Environment variables for the command.
 * @returns {string|undefined} The standard output from the executed command, or `undefined` if the command execution fails.
 */
export function runCommandSync(opensslCommand, execOptions = { encoding: 'utf-8' }) {
    try {
        return execSync(__plaformWindows ? `"${__opensslPath} " ${opensslCommand}` : `openssl ${opensslCommand}`, execOptions);
    } catch {
        return undefined;
    }
}