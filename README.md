[![](https://i.imgur.com/nSEjI0t.jpeg)](https://github.com/FirstTimeEZ/server-ssl/archive/refs/heads/main.zip)

# Simple OpenSSL for Javascript

Execute `OpenSSL` commands directly from JavaScript. Provides a simple, cross-platform interface for cryptographic operations, certificate management, and security tasks.

```javascript
import { runCommandSync } from 'simple-open-ssl';

const standardOutput = runCommandSync(`x509 -in certificate.pem -enddate -noout`);
```

---------------------

### runCommandSync

```
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
 * 
 * @returns {string|undefined} The standard output from the executed command, or `undefined` if the command execution fails.
 */
export function runCommandSync(opensslCommand, execOptions = { encoding: 'utf-8' }) { /* */ }
```