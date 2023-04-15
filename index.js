const { DefaultAzureCredential } = require("@azure/identity");
const { KeyClient } = require("@azure/keyvault-keys");

require("dotenv").config();

async function main() {
    // Create a key client using the DefaultAzureCredential
    const keyVaultUrl = process.env.KEYVAULT_URI;
    const credential = new DefaultAzureCredential();
    const client = new KeyClient(keyVaultUrl, credential);

    try {
        // Retrieving the properties of the existing keys in that specific Key Vault.
        console.log(await client.listPropertiesOfKeys().next());
    } catch (error) {
        console.log("Azure Active Directory service response with error", error.errorResponse);
    }
}
main();