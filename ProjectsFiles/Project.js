export default class Project {
    constructor(name,
        weekProduced, 
        description,
        languages, 
        launchLink, 
        codeLink,
        size){
        this.name = name;
        this.weekProduced = weekProduced;
        this.description = description;
        this.languages = languages;
        this.launchLink = launchLink;
        this.codeLink = codeLink;
        this.size = size;
    }

    generateLanguageList = () => {
        let languageList = "";
        this.languages.forEach(language => {
            languageList += `<p>- ${language}</p>`;
        });
        return languageList;
    }

    get html() {
        // console.log(this.name);
        return `<article class="prjBox box ${this.size}">
            <h3>${this.name}</h3>
            <p>${this.description}</p>
            <p>Languages Included:
            ${this.generateLanguageList()}
            </p>
            <p>This project was produced <em>${this.weekProduced}</em> weeks into the _nology course.</p>
            <div class="launch">
                <a href="${this.launchLink}" target="_blank"><i class="fas fa-globe"></i></a>
                <a href="${this.codeLink}" target="_blank"><i class="fas fa-code"></i></a>
            </div>
        </article>`
    }
}