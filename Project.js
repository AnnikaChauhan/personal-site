export default class Project {
    constuctor(name,
        id, 
        importance, 
        description, 
        launchLink, 
        codeLink){
        this.name = name;
        this.id = id;
        this.importance = importance;
        this.description = description;
        this.launchLink = launchLink;
        this.codeLink = codeLink;
    }

    get html() {
        return `<article class="prjBox box importance${this.importance}" id="${this.id}">
            <h3></h3>
            <p></p>
            <div class="launch">
                <a href="${this.launchLink}" target="_blank"><i class="fas fa-globe"></i></a>
                <a href="${this.codeLink}" target="_blank"><i class="fas fa-code"></i></a>
            </div>
        </article>`
    }
}