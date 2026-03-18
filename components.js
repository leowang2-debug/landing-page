class NavBar extends HTMLElement {
    connectedCallback() {
        // Get the current page filename (e.g., 'about.html')
        let currentPath = window.location.pathname.split('/').pop();
        if (currentPath === '') currentPath = 'index.html'; // Default to index.html if at root

        this.innerHTML = `
            <header>
                <nav>
                    <a href="index.html" class="logo">NoteWave</a>
                    <ul class="nav-links">
                        <li><a href="index.html" class="${currentPath === 'index.html' ? 'active' : ''}">Home</a></li>
                        <li><a href="about.html" class="${currentPath === 'about.html' ? 'active' : ''}">About</a></li>
                        <li><a href="market.html" class="${currentPath === 'market.html' ? 'active' : ''}">Market</a></li>
                        <li><a href="business.html" class="${currentPath === 'business.html' ? 'active' : ''}">Business</a></li>
                        <li><a href="team.html" class="${currentPath === 'team.html' ? 'active' : ''}">Team</a></li>
                        <li><a href="contact.html" class="${currentPath === 'contact.html' ? 'active' : ''}">Contact</a></li>
                    </ul>
                </nav>
            </header>
        `;
    }
}

class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <p>&copy; 2026 NoteWave. All rights reserved.</p>
            </footer>
        `;
    }
}

// Define the custom elements
customElements.define('nav-bar', NavBar);
customElements.define('site-footer', SiteFooter);
