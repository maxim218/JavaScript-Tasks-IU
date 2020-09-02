const fs = require('fs');
const path = require('path');

const folderPath = './..';
const readmePath = './../README.md';
const repoUrl = 'https://github.com/maxim218/JavaScript-Tasks-IU/blob/master';
fs.writeFileSync(readmePath, '# Оглавление курса\r\n\r\n');

function fileCounterByPathPrefix(dirpath, prefix) {
    const dirArr = fs.readdirSync(dirpath).filter(fileName => fileName.includes(prefix));
    return dirArr.length;
}

function getMdHeadersFromFile(filepath) {
    const linesArr = fs.readFileSync(filepath, 'utf8').split('\n')
                        .map(line => line.replace('\r',''))
                        .filter(line => line.indexOf('# ') === 0)
                        .map(line => line.replace('# ', '')); // [ 'Объекты', 'Функции' ]

    const headerStr = linesArr.join('. ');
    console.log(headerStr);
    return headerStr;
}

function appendToReadme(str) {
	fs.appendFileSync(readmePath, str);
}

function appendHeaderToContents(headerStr, taskName, lessonName) {
    const headerLink = `[${headerStr}](${repoUrl}/${taskName}/${lessonName} "")\r\n\r\n`;
    appendToReadme(headerLink);
}

const taskDirPrefix = 'TASK_';
const taskLen = fileCounterByPathPrefix(folderPath, taskDirPrefix);

for (let i = 1; i <= taskLen; i++) {
    const taskdirName = taskDirPrefix + i + '';
    const taskDirPath = path.join(folderPath, taskdirName);

    const lessonMdPrefix = 'Lesson_';
    const lessonLen = fileCounterByPathPrefix(taskDirPath, lessonMdPrefix);

    appendToReadme(`**Раздел ${i}** \n\r`);

    for (let j = 1; j <= lessonLen; j++) {
        const lessonMdName = lessonMdPrefix + j + '.markdown'; // ToDo add .md
        const lessonMdPath = path.join(taskDirPath, lessonMdName);

        console.log(`${lessonMdPrefix}${j}`);
        console.log(`${lessonMdPath}`);

        let headerStr = getMdHeadersFromFile(lessonMdPath);
        headerStr = `${i}.${j} ${headerStr}`;
        appendHeaderToContents(headerStr, taskdirName, lessonMdName);
    }
}
