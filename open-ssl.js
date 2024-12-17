import { execSync } from 'child_process';
import { platform } from 'os';

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __opensslPath = join(dirname(fileURLToPath(import.meta.url)), "openssl", "bin", "openssl.exe");

/**
 * Executes an `OpenSSL` command synchronously.
 * 
 * @remark
 * `Windows` - Will use the packaged version of `OpenSSL`, which should always work
 * 
 * @remark
 * `Linux` - Will use the local version of `OpenSSL`, which should be installed but can be installed with a package manager `... install openssl`
 *
 * @param {string} opensslCommand - The OpenSSL command to be executed, including any arguments.
 * @returns {string|undefined} The standard output from the executed command, or `undefined` if the command execution fails.
 */
export function runCommandSync(opensslCommand) {
    try {
        let pdc;

        if (platform() === 'win32') {
            pdc = `"${__opensslPath} " ${opensslCommand}`; // use packaged version
        }
        else {
            pdc = `openssl ${opensslCommand}`; // use local version
        }

        return execSync(pdc, { encoding: 'utf-8' });
    } catch {
        return undefined;
    }
}