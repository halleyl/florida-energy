# Objectives

* Encourage collaboration between energy experts at supported unversities.
* Assist the State of Florida in development of a sustainable and efficient energy plan.
* Become a world leader in development and improvement of new energy strategies.
* Develop outreach programs to educate energy workers and the public.


# State of Current Site

  ## Accessibility Audit
  
  Using Chrome Dev Tools accessibility audit:
  * Images do not have alt tags.
  * Not all link text is semantic.
  * Not enough color contrast between background and foreground.
  * Form fields do not have labels.
  * Pages do not have print-friendly versions.
  

  ## Mobile Friendliness
  
  * Overall layout is not responsive.
  * Images are not responsive, sizes are static.
  * Tables are used for non-tabular content.
  * Content is shrunken on mobile devices, making text hard to read and link targets difficult to touch.
  
  
  ## Performance
  
  [Home page](http://floridaenergy.ufl.edu/)
  Using Chrome Dev Tools performance audit:
  * First meaningful paint: 3 seconds
  * Fully interative load: 20 seconds
  * Javascript boot-up time: 9 seconds
    * JS scripts may be more complex than needed
  Using webpagetest.org grades:
  * First byte time: F
  * Compress images: C
  * Cache static content: F
  
  [Biomass and Biofuels](http://floridaenergy.ufl.edu/fl-energy-industry/under-construction/)
  [Note:] This page's url is not semantic and seems to be a placeholder.
  Using Chrome Dev Tools performance audit:
  * First meaningful paint: 3 seconds
  * Fully interative load: 10 seconds
  * Javascript boot-up time: 7 seconds


  ## Functionality
  
  * The search bar is using up too much space at the top.
  * Layout of main content is not very consistent across pages. It looks like different people designed different pages.
  * Facility links in footer should have larger click target (make the entire white oval clickable.)
  * Poor use of padding or margins on some pages makes text appear crowded. [Example](http://floridaenergy.ufl.edu/energy-education/free-online-courses/)
  
  
  ## Ease of Use
  
  * Inconsistent use of color - the colors do not indicate anything helpful.
  * Links are not always the same color. Hard to quickly understand what is clickable.
  * Some navigation links are internal, some are external, and some open PDFs, but there is nothing to indicate the difference.
  * Having two navigation menus (without full context about why they are separate) is confusing.
  * The side menu changes based on which page you're on. It's overwhelming to see this many pages without clearer organization.
  * Some of the menus have sub-sub-menus.
  * [Sitemap](http://floridaenergy.ufl.edu/sitemap/) is blank.


# User Research

  ## Who
    
    ### Age and age groups
      Adult
      Young adult
    
    ### Personal life-style
      Professional
      Academic
      University student
      Florida resident
    
    ### Gender
      Mostly male (66-76%)
      Some female (24-34%)
    
    ### Language
      English as first language
      English as second language
      Some non-English speakers?
    
    ### Education
      Post-graduate
      University
      Some college?
    
    ### Learning preferences
      Likes to know theory
      Practical & systematic
      Analytical
    
    ### Work attributes
      Professional
      Academic
      Student
      Job seekers

    ### Expectations
      Gather information about energy policy and planning
      Learn about new strategies
      Seek information about energy sector employment
      Collaborate or interact with other visitors?

    ### Existing knowledge
      Many will have substatial knowledge of the field
      Some will have moderate knowledge which they are expanding
      Some will have little knowledge, trying to learn more

    ### Web and computer experience
      Medium
      Low
      High

  ## How

    ### On what device they will read it
      Laptop PC
      Desktop PC with larger monitor
      Tablet computer
      Some smartphones?

    ### Internet connection speed
      Standard broadband
      Slower broadband
      Some mobile data/3G/4G?

  ## Where

    ### User’s location
      Local (Florida)
      National
      Subrban
      Urban
      Some international

    ### Place where the page is read
      At work
      At school
      In the field
      Library/in public
    
  ## Why

    ### Why users seek the content
      Professional interest in energy policy and strategy
      Academic interest in energy innovation and outreach
      Grants and funding research
      Prospective interest in energy jobs

    ### Importance of the content to them
      Vital to their work
      Interesting for research
      Useful tools for work and outreach
    
    ### How they found the page
      Web search
      Word of mouth from others in industry
      Links from related websites

  ## When

    ### When it is read
      During daytime work hours
      In evenings for after-work research


# Device Support Necessary

  ## Devices
    * Desktop computers (0-8 years old)
      * Windows, Mac
    * Laptop computers (0-8 years old)
      * Windows, Mac
    * Tablet computers (0-4 years old)
      * iPad, Surface, Galaxy Tab
    * Smartphones (0-4 years old)
      * iPhone, Galaxy
  
  ## Browsers
    * Chrome
    * Safari
    * Internet Explorer
    * Firefox
    * Edge


# Recommendations
  
    ### Accessibility improvements
      * Add alt tags to all images
      * Make link text semantic
      * Implement new color scheme with higher color contrast for readibility
      * Add labels to all form fields
      * Create print-friendly versions of pages
        * If not for all pages, at least for pages that are most likely to be printed
      * Ensure that page structure results in good outline
        * Use meaningful headings, semantic HTML tags
      * Include skip links for navigation?
  
    ### Responsiveness improvements
      * Define images by percentage of container for better scaling
      * Determine best breakpoints to improve design across small, medium and large screens
      * Allow sections of page to wrap/stack with float or flexbox
      * Adapt text size for better readability and interaction on mobile devices
  
    ### Performance improvements
      * Serve more optimized images
      * Serve srcset of images for larger images
      * Rewrite necessary JS into smaller modules for faster load time
      * If feasible, move from WordPress to non-CMS platform to avoid code bloat
        * Do stakeholders need to edit regularly? if so, keep CMS.
      * Allow caching of site elements to improve load time

    ### Interface and UX improvements
      * Integrate search box into design
      * Create a consistent style guide for use across site
        * Commit to a universal color scheme
      * Include indication about the destination links (internal, external, download, PDF)
        * Small icons from Font Awesome
      * Improve navigation, possibly with an expandable mega-menu style to encompass all links in one location
        * Use breadcrumbs for easier orientation?
        * May want to keep left-hand menu, but use it with consistentcy and make it more minimal

  ## Deliverables
  
    * Creation of style guide
      * Include color scheme with improved color contract
    * Redesign of site navigation
    * Accessibility improvements
      * Semantic HTML tags
      * Image alt tags
      * Print friendly pages
    * Responsivity improvements
      * Make design more modular for better page flow
      * Use CSS floats or flexbox for layout instead of tables
      * Change to relative sizes for elements (percent or rem)
      * Ensure that site functions adequately without scripts
    * Performance
      * Optimize images
      * Simplify Javascript if possible
    * Integrate search box into design