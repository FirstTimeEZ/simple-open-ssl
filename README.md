[![](https://i.imgur.com/nSEjI0t.jpeg)](https://github.com/FirstTimeEZ/server-ssl/archive/refs/heads/main.zip)

# Simple OpenSSL for Javascript

Executes an `OpenSSL` command synchronously

```javascript
import { runCommandSync } from 'simple-open-ssl';

const standardOutput = runCommandSync(`x509 -in certificate.pem -enddate -noout`);
```

---------------------

### runCommandSync

```
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
export function runCommandSync(opensslCommand)
```