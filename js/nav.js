var navHome = [ 
  {name: 'About Us', url: '#'}, 
  {name: 'Florida Energy Facts', url: '#'}, 
  {name: 'FESC Conferences', url: '#'}, 
  {name: 'Advisory Board', url: '#'}, 
  {name: 'Facilities', url: '#'}
]

var navResearch = [ 
  {name: 'By University', url: '#'}, 
  {name: 'By Research Area', url: '#'} 
]

var navEducation = [ 
  {name: 'Energy Literacy', url: '#'}, 
  {name: 'Energy Education', url: '#'}, 
  {name: 'Institutions & Courses', url: '#'}, 
  {name: 'Energy Jobs', url: '#'} 
]

var navOutreach = [ 
  {name: 'Fact Sheets', url: '#'}, 
  {name: 'Videos', url: '#'}, 
  {name: 'Research & News', url: '#'} 
]

var navIndustry = [ 
   {name: 'Energy Data', url: 'data.html'}, 
   {name: 'Energy Efficiency', url: '#'}, 
   {name: 'Renewable Energy', url: '#'}, 
   {name: 'Fossil Fuels', url: '#'}, 
   {name: 'Energy Storage', url: '#'}, 
   {name: 'Water Purification', url: '#'} 
]

var app = new Vue({
  el: '#top-nav',
  data: {
    home: navHome,
    research: navResearch,
    education: navEducation,
    outreach: navOutreach,
    industry: navIndustry
  }
})

var app = new Vue({
  el: '#bottom-nav',
  data: {
    home: navHome,
    research: navResearch,
    education: navEducation,
    outreach: navOutreach,
    industry: navIndustry
  }
})

var app = new Vue({
  el: '#top-logo'
})