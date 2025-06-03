// src/utils/urlManager.ts

// Mapping between section IDs and clean URL paths
const sectionToPathMap: Record<string, string> = {
  'about-me': '/about-me',
  'personal': '/personal',
  'education': '/education', 
  'skills': '/skills',
  'projects': '/projects',
  'trucking-logistics': '/trucking-logistics',
  'empire-football': '/empire-football',
  'unidad-austin' : '/unidad-austin',
  'experience': '/experience',
  'mayaLEX': '/mayaLEX',
  'nahuatLEX': '/nahuatLEX',
  'ukg-internship': '/ukg-internship',
  'notes': '/notes',
  'blogs': '/blogs',
  'papers': '/papers',
  'docs': '/documentation',
  'contact': '/contact',
  'resume': '/resume'
};

const pathToSectionMap: Record<string, string> = Object.fromEntries(
  Object.entries(sectionToPathMap).map(([section, path]) => [path, section])
);

export class URLManager {
  private static baseUrl = ''; // GitHub Pages base path
  
  /**
   * Convert section ID to clean URL path
   */
  static sectionToPath(sectionId: string): string {
    return sectionToPathMap[sectionId] || '/about-me';
  }
  
  /**
   * Convert URL path to section ID
   */
  static pathToSection(path: string): string {
    // Remove base URL if present
    const cleanPath = path.replace(this.baseUrl, '');
    return pathToSectionMap[cleanPath] || 'about-me';
  }
  
  /**
   * Get current section from URL
   */
  static getCurrentSection(): string {
    const path = window.location.pathname;
    return this.pathToSection(path);
  }
  
  /**
   * Update URL to show clean path without page reload
   */
  static updateURL(sectionId: string): void {
    const newPath = this.baseUrl + this.sectionToPath(sectionId);
    const currentPath = window.location.pathname;
    
    if (currentPath !== newPath) {
      window.history.replaceState(
        { section: sectionId },
        '',
        newPath
      );
    }
  }
  
  /**
   * Navigate to section and update URL
   */
  static navigateToSection(sectionId: string): void {
    // Update URL first
    this.updateURL(sectionId);
    
    // Then scroll to section (your existing behavior)
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  /**
   * Handle initial page load - convert clean URL to section navigation
   */
  static handleInitialLoad(): string {
    const sectionFromUrl = this.getCurrentSection();
    
    // If we're on a clean URL, scroll to the appropriate section
    if (window.location.pathname !== this.baseUrl && window.location.pathname !== '/') {
      setTimeout(() => {
        const element = document.getElementById(sectionFromUrl);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to ensure DOM is ready
    }
    
    return sectionFromUrl;
  }
  
  /**
   * Generate clean URL for table of contents
   */
  static generateTocUrl(sectionId: string): string {
    return this.baseUrl + this.sectionToPath(sectionId);
  }
}