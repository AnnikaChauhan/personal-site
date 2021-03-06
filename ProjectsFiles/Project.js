export default class Project {
    constructor(name,
        weekProduced, 
        description,
        languages, 
        launchLink, 
        codeLink,
        size,
        picture){
        this.name = name;
        this.weekProduced = weekProduced;
        this.description = description;
        this.languages = languages;
        this.launchLink = launchLink;
        this.codeLink = codeLink;
        this.size = size;
        this.picture = picture;
    }

    get html() {
        return `<article class="prjBox box ${this.size}">
            <h3>${this.name}</h3>
            <p class="description">${this.description}</p>
            <p>Languages & Tools: ${this.languages}</p>
            <div class="prjImage">
                <img src="${this.picture}" alt="${this.name}">
            </div>
            <div class="launch">
                <a href="${this.launchLink}" target="_blank"><i class="fas fa-rocket"></i></i></a>
                <a href="${this.codeLink}" target="_blank"><i class="fas fa-code"></i></a>
            </div>
        </article>`
    }
}