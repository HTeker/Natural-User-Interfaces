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

        return `<div class="hero-img-container"><img src="${imgSrc}" /></div>`;

    },

    renderContent(content) {

        let html = '';

        content.forEach(item => {

            switch(item.type) {

                case 'accordion':

                    html +=
                    `<section class="accordion">
                        <input type="radio" name="accordion" id="${item.value.toLowerCase()}">
                        <h2 class="handle">
                            <label for="${item.value.toLowerCase()}">${item.value}</label>
                        </h2>
                        <div class="content">
                            ${this.renderContent(item.children)}
                        </div>
                    </section>`;

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

        });

        return html;

    }

};