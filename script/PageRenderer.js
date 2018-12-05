PageRenderer = {

    render(page) {

        let html = '';
        
        html += this.renderTitle(page.title);
        typeof(page.heroImage) != 'undefined' && (html += this.renderHeroImage(page.heroImage));
        html += this.renderContent(page.content);

        return html

    },

    renderTitle(title) {

        return `<h1>${title}</h1>`;

    },

    renderHeroImage(imgSrc) {

        return `<img src="${imgSrc}" />`;

    },

    renderContent(content) {

        let html = '';

        content.forEach(item => {

            switch(item.type) {

                case 'accordion':
                    html += `<h2>${item.value}</h2>`;
                    break;

                case 'paragraph':
                    html += `<p>${item.value}</p>`
                    break;

                case 'video':
                    html += `<iframe width="560" height="315" src="${item.value}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                    break;

                case 'html':
                    html += item.value;
                    break;                    
    
                default:
                    html += '';
                    break;
    
            }

            if(Array.isArray(item.children)) {

                html += this.renderContent(item.children);

            }

        });

        return html;

    }

};