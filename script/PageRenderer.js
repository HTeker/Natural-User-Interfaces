PageRenderer = {

    render(nui) {

        let html = '';
        
        html += this.renderTitle(nui.title);
        html += this.renderHeroImage(nui.heroImage);

        return html

    },

    renderTitle(title) {
        return `<h1>${title}</h1>`;
    },

    renderHeroImage(imgSrc) {
        return `<img src="${imgSrc}" />`;
    }

};