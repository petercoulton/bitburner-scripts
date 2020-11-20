let config = {
    githubUrl: 'https://raw.githubusercontent.com/petercoulton/bitburner-scripts/main',
    files: [
      `scripts/hack.js`
    ]
};

export async function main(ns) {
    ns.tprint(`Importing files`);
    let filesImported = await importFiles(ns);
    if (filesImported) {
        ns.tprint(`Files imported`);
    } else {
        ns.tprint(`Error importing files`);
    }
}

async function importFiles(ns) {
    let filesImported = true;
    for (let file of config.files) {
        let result = await ns.wget(`${config.githubUrl}/${file}`, `/${file}`);
        filesImported = filesImported && result;
        ns.tprint(`${result ? '✅' : '❌'} ${config.githubUrl}/${file} -> ${file}`);
    }
    return filesImported;
}
