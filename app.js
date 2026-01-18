// PM Internship Scheme Recommendation Engine JavaScript

// Application Data
const appData = {
    sectors: [
        {
            id: "automotive",
            name: "Automotive",
            icon: "🚗",
            description: "Vehicle manufacturing, automotive parts, electric vehicles",
            skills: ["Mechanical Engineering", "Electronics", "Manufacturing", "Quality Control", "Design"]
        },
        {
            id: "banking_finance", 
            name: "Banking & Financial Services",
            icon: "🏦",
            description: "Banking operations, financial analysis, insurance, fintech",
            skills: ["Finance", "Accounting", "Customer Service", "Data Analysis", "Risk Management"]
        },
        {
            id: "oil_gas_energy",
            name: "Oil, Gas & Energy",
            icon: "⚡",
            description: "Energy production, renewable energy, oil & gas operations",
            skills: ["Engineering", "Environmental Science", "Project Management", "Safety Management", "Operations"]
        },
        {
            id: "travel_hospitality",
            name: "Travel & Hospitality",
            icon: "✈️",
            description: "Tourism, hotels, travel services, event management", 
            skills: ["Customer Service", "Event Management", "Marketing", "Operations", "Languages"]
        },
        {
            id: "healthcare",
            name: "Healthcare",
            icon: "🏥",
            description: "Medical services, pharmaceuticals, health technology",
            skills: ["Medical Knowledge", "Patient Care", "Research", "Data Analysis", "Healthcare Management"]
        },
        {
            id: "it_software",
            name: "IT & Software Development",
            icon: "💻",
            description: "Software development, IT services, digital solutions",
            skills: ["Programming", "Web Development", "Database Management", "Cybersecurity", "Cloud Computing"]
        },
        {
            id: "manufacturing",
            name: "Manufacturing & Industrial",
            icon: "🏭",
            description: "Industrial production, manufacturing processes, quality control",
            skills: ["Manufacturing", "Quality Control", "Operations Management", "Engineering", "Logistics"]
        },
        {
            id: "agriculture",
            name: "Agriculture",
            icon: "🌾",
            description: "Farming, agricultural technology, food processing",
            skills: ["Agricultural Knowledge", "Research", "Technology", "Supply Chain", "Sustainability"]
        },
        {
            id: "retail_consumer",
            name: "Retail & Consumer Goods",
            icon: "🛍️",
            description: "Retail operations, consumer products, e-commerce",
            skills: ["Sales", "Marketing", "Customer Service", "Operations", "E-commerce"]
        },
        {
            id: "textile",
            name: "Textile & Garments",
            icon: "👕",
            description: "Textile manufacturing, garment production, fashion",
            skills: ["Design", "Manufacturing", "Quality Control", "Fashion", "Supply Chain"]
        }
    ],
    
    educationLevels: [
        {"id": "10th", "name": "Class 10th Pass", "weight": 1},
        {"id": "12th", "name": "Class 12th Pass", "weight": 2},
        {"id": "iti", "name": "ITI Certificate", "weight": 3},
        {"id": "diploma", "name": "Diploma/Polytechnic", "weight": 4},
        {"id": "graduation", "name": "Bachelor's Degree", "weight": 5}
    ],
    
    commonSkills: [
        "Communication", "Computer Basics", "Customer Service", "Teamwork", 
        "Problem Solving", "Time Management", "Basic English", "Hindi",
        "Regional Language", "Mathematics", "Sales", "Marketing",
        "Data Entry", "MS Office", "Internet Usage", "Mobile Apps"
    ],
    
    sampleInternships: [
        {
            id: "INT_001",
            title: "Associate Officer",
            company: "India Corp",
            sector: {
                id: "manufacturing",
                name: "Manufacturing & Industrial",
                skills: ["Manufacturing", "Quality Control", "Operations Management", "Engineering", "Logistics"]
            },
            location: { state: "Madhya Pradesh", district: "Indore" },
            education_required: {"id": "12th", "name": "Class 12th Pass", "weight": 2},
            skills_required: ["Manufacturing", "Quality Control", "Computer Basics", "Communication", "Teamwork"],
            stipend: 5000,
            duration_months: 12,
            type: "Full-time",
            description: "Internship opportunity in Manufacturing & Industrial sector with hands-on experience and mentorship.",
            benefits: ["Monthly stipend of ₹5,000", "One-time grant of ₹6,000", "Insurance coverage", "Certificate", "Industry exposure"]
        },
        {
            id: "INT_002", 
            title: "Junior Executive",
            company: "Prime Industries",
            sector: {
                id: "banking_finance",
                name: "Banking & Financial Services",
                skills: ["Finance", "Accounting", "Customer Service", "Data Analysis", "Risk Management"]
            },
            location: { state: "Uttar Pradesh", district: "Kanpur" },
            education_required: {"id": "graduation", "name": "Bachelor's Degree", "weight": 5},
            skills_required: ["Finance", "Customer Service", "Data Analysis", "Communication", "MS Office"],
            stipend: 5000,
            duration_months: 12, 
            type: "Full-time",
            description: "Internship opportunity in Banking & Financial Services sector with hands-on experience and mentorship.",
            benefits: ["Monthly stipend of ₹5,000", "One-time grant of ₹6,000", "Insurance coverage", "Certificate", "Industry exposure"]
        },
        {
            id: "INT_003",
            title: "Trainee Assistant", 
            company: "Global Solutions",
            sector: {
                id: "it_software",
                name: "IT & Software Development",
                skills: ["Programming", "Web Development", "Database Management", "Cybersecurity", "Cloud Computing"]
            },
            location: { state: "Karnataka", district: "Bangalore" },
            education_required: {"id": "diploma", "name": "Diploma/Polytechnic", "weight": 4},
            skills_required: ["Computer Basics", "Programming", "Problem Solving", "Communication", "Teamwork"],
            stipend: 5000,
            duration_months: 12,
            type: "Full-time", 
            description: "Internship opportunity in IT & Software Development sector with hands-on experience and mentorship.",
            benefits: ["Monthly stipend of ₹5,000", "One-time grant of ₹6,000", "Insurance coverage", "Certificate", "Industry exposure"]
        },
        {
            id: "INT_004",
            title: "Junior Analyst",
            company: "Tech Enterprises", 
            sector: {
                id: "healthcare",
                name: "Healthcare",
                skills: ["Medical Knowledge", "Patient Care", "Research", "Data Analysis", "Healthcare Management"]
            },
            location: { state: "Maharashtra", district: "Pune" },
            education_required: {"id": "graduation", "name": "Bachelor's Degree", "weight": 5},
            skills_required: ["Research", "Data Analysis", "Computer Basics", "Communication", "Problem Solving"],
            stipend: 5000,
            duration_months: 12,
            type: "Full-time",
            description: "Internship opportunity in Healthcare sector with hands-on experience and mentorship.", 
            benefits: ["Monthly stipend of ₹5,000", "One-time grant of ₹6,000", "Insurance coverage", "Certificate", "Industry exposure"]
        },
        {
            id: "INT_005",
            title: "Associate Executive",
            company: "India Ltd",
            sector: {
                id: "automotive", 
                name: "Automotive",
                skills: ["Mechanical Engineering", "Electronics", "Manufacturing", "Quality Control", "Design"]
            },
            location: { state: "Gujarat", district: "Ahmedabad" },
            education_required: {"id": "iti", "name": "ITI Certificate", "weight": 3},
            skills_required: ["Mechanical Engineering", "Manufacturing", "Quality Control", "Teamwork", "Communication"],
            stipend: 5000,
            duration_months: 12,
            type: "Full-time",
            description: "Internship opportunity in Automotive sector with hands-on experience and mentorship.",
            benefits: ["Monthly stipend of ₹5,000", "One-time grant of ₹6,000", "Insurance coverage", "Certificate", "Industry exposure"]
        },
        {
            id: "INT_006",
            title: "Trainee Officer",
            company: "Global Corp",
            sector: {
                id: "oil_gas_energy",
                name: "Oil, Gas & Energy", 
                skills: ["Engineering", "Environmental Science", "Project Management", "Safety Management", "Operations"]
            },
            location: { state: "Rajasthan", district: "Jaipur" },
            education_required: {"id": "graduation", "name": "Bachelor's Degree", "weight": 5},
            skills_required: ["Engineering", "Project Management", "Safety Management", "Operations", "Teamwork"],
            stipend: 5000,
            duration_months: 12,
            type: "Full-time",
            description: "Internship opportunity in Oil, Gas & Energy sector with hands-on experience and mentorship.",
            benefits: ["Monthly stipend of ₹5,000", "One-time grant of ₹6,000", "Insurance coverage", "Certificate", "Industry exposure"]
        },
        {
            id: "INT_007", 
            title: "Junior Assistant",
            company: "Prime Corp",
            sector: {
                id: "travel_hospitality",
                name: "Travel & Hospitality",
                skills: ["Customer Service", "Event Management", "Marketing", "Operations", "Languages"]
            },
            location: { state: "Kerala", district: "Kochi" },
            education_required: {"id": "12th", "name": "Class 12th Pass", "weight": 2},
            skills_required: ["Customer Service", "Communication", "Marketing", "Languages", "Teamwork"],
            stipend: 5000,
            duration_months: 12,
            type: "Full-time",
            description: "Internship opportunity in Travel & Hospitality sector with hands-on experience and mentorship.",
            benefits: ["Monthly stipend of ₹5,000", "One-time grant of ₹6,000", "Insurance coverage", "Certificate", "Industry exposure"]
        },
        {
            id: "INT_008",
            title: "Associate Analyst",
            company: "Tech Solutions",
            sector: {
                id: "agriculture", 
                name: "Agriculture",
                skills: ["Agricultural Knowledge", "Research", "Technology", "Supply Chain", "Sustainability"]
            },
            location: { state: "Punjab", district: "Ludhiana" },
            education_required: {"id": "graduation", "name": "Bachelor's Degree", "weight": 5},
            skills_required: ["Agricultural Knowledge", "Research", "Technology", "Data Analysis", "Problem Solving"],
            stipend: 5000,
            duration_months: 12,
            type: "Full-time", 
            description: "Internship opportunity in Agriculture sector with hands-on experience and mentorship.",
            benefits: ["Monthly stipend of ₹5,000", "One-time grant of ₹6,000", "Insurance coverage", "Certificate", "Industry exposure"]
        },
        {
            id: "INT_009",
            title: "Trainee Executive", 
            company: "India Industries",
            sector: {
                id: "retail_consumer",
                name: "Retail & Consumer Goods",
                skills: ["Sales", "Marketing", "Customer Service", "Operations", "E-commerce"]
            },
            location: { state: "Tamil Nadu", district: "Chennai" },
            education_required: {"id": "diploma", "name": "Diploma/Polytechnic", "weight": 4},
            skills_required: ["Sales", "Marketing", "Customer Service", "Communication", "Computer Basics"],
            stipend: 5000,
            duration_months: 12,
            type: "Full-time",
            description: "Internship opportunity in Retail & Consumer Goods sector with hands-on experience and mentorship.", 
            benefits: ["Monthly stipend of ₹5,000", "One-time grant of ₹6,000", "Insurance coverage", "Certificate", "Industry exposure"]
        },
        {
            id: "INT_010",
            title: "Junior Officer", 
            company: "Global Enterprises",
            sector: {
                id: "textile",
                name: "Textile & Garments",
                skills: ["Design", "Manufacturing", "Quality Control", "Fashion", "Supply Chain"]
            },
            location: { state: "West Bengal", district: "Kolkata" },
            education_required: {"id": "iti", "name": "ITI Certificate", "weight": 3},
            skills_required: ["Design", "Manufacturing", "Quality Control", "Teamwork", "Communication"], 
            stipend: 5000,
            duration_months: 12,
            type: "Full-time",
            description: "Internship opportunity in Textile & Garments sector with hands-on experience and mentorship.",
            benefits: ["Monthly stipend of ₹5,000", "One-time grant of ₹6,000", "Insurance coverage", "Certificate", "Industry exposure"]
        }
    ]
};

// Application State
let currentStep = 1;
let maxSelectedSectors = 3;
let userProfile = {};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Force light theme
    document.documentElement.setAttribute('data-color-scheme', 'light');
    document.body.style.backgroundColor = '#FFFFFF';
    document.body.style.color = '#212529';
    
    // Populate sectors grid
    populateSectorsGrid();
    
    // Populate skills grid
    populateSkillsGrid();
    
    // Show welcome page by default
    showPage('welcome');
    
    // Prevent form submission on Enter key
    const form = document.getElementById('profileForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
        });
    }
}

// Page Navigation
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show requested page
    const page = document.getElementById(pageId + 'Page');
    if (page) {
        page.classList.add('active');
    }
}

function startApplication() {
    showPage('profile');
    currentStep = 1;
    showStep(currentStep);
    updateProgress();
}

function goBack() {
    showPage('welcome');
}

function goBackToForm() {
    showPage('profile');
    showStep(currentStep);
}

// Form Step Management
function nextStep() {
    if (validateCurrentStep()) {
        if (currentStep < 4) {
            currentStep++;
            showStep(currentStep);
            updateProgress();
        }
    }
}

function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
        updateProgress();
    }
}

function showStep(step) {
    // Hide all steps
    document.querySelectorAll('.form-step').forEach(stepEl => {
        stepEl.classList.remove('active');
    });
    
    // Show current step
    const stepEl = document.getElementById('step' + step);
    if (stepEl) {
        stepEl.classList.add('active');
    }
}

function updateProgress() {
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    
    if (progressBar && progressText) {
        const progressPercentage = (currentStep / 4) * 100;
        progressBar.style.width = progressPercentage + '%';
        progressText.textContent = `Step ${currentStep} of 4`;
    }
}

// Form Validation
function validateCurrentStep() {
    switch(currentStep) {
        case 1:
            return validatePersonalInfo();
        case 2:
            return validateEducation();
        case 3:
            return validateLocation();
        case 4:
            return validateInterests();
        default:
            return true;
    }
}

function validatePersonalInfo() {
    const name = document.getElementById('fullName');
    const age = document.getElementById('age');
    const gender = document.querySelector('input[name="gender"]:checked');
    
    if (!name || !name.value.trim()) {
        alert('Please enter your full name / कृपया अपना पूरा नाम दर्ज करें');
        if (name) name.focus();
        return false;
    }
    if (!age || !age.value) {
        alert('Please select your age / कृपया अपनी उम्र चुनें');
        if (age) age.focus();
        return false;
    }
    if (!gender) {
        alert('Please select your gender / कृपया अपना लिंग चुनें');
        return false;
    }
    
    return true;
}

function validateEducation() {
    const education = document.querySelector('input[name="education"]:checked');
    
    if (!education) {
        alert('Please select your education level / कृपया अपना शिक्षा स्तर चुनें');
        return false;
    }
    
    return true;
}

function validateLocation() {
    const state = document.getElementById('preferredState');
    const relocate = document.querySelector('input[name="relocate"]:checked');
    const workMode = document.querySelector('input[name="workMode"]:checked');
    
    if (!state || !state.value) {
        alert('Please select your preferred state / कृपया अपना पसंदीदा राज्य चुनें');
        if (state) state.focus();
        return false;
    }
    if (!relocate) {
        alert('Please specify if you are willing to relocate / कृपया बताएं कि क्या आप स्थानांतरित होने को तैयार हैं');
        return false;
    }
    if (!workMode) {
        alert('Please select your work mode preference / कृपया अपनी कार्य मोड प्राथमिकता चुनें');
        return false;
    }
    
    return true;
}

function validateInterests() {
    const selectedSectors = document.querySelectorAll('input[name="sectors"]:checked');
    const selectedSkills = document.querySelectorAll('input[name="skills"]:checked');
    
    if (selectedSectors.length === 0) {
        alert('Please select at least one sector that interests you / कृपया कम से कम एक ऐसा क्षेत्र चुनें जिसमें आपकी रुचि है');
        return false;
    }
    if (selectedSectors.length > maxSelectedSectors) {
        alert(`Please select maximum ${maxSelectedSectors} sectors / कृपया अधिकतम ${maxSelectedSectors} क्षेत्र चुनें`);
        return false;
    }
    if (selectedSkills.length === 0) {
        alert('Please select at least one skill that you have / कृपया कम से कम एक ऐसा कौशल चुनें जो आपके पास है');
        return false;
    }
    
    return true;
}

// Dynamic Content Population
function populateSectorsGrid() {
    const sectorGrid = document.getElementById('sectorGrid');
    if (!sectorGrid) return;
    
    sectorGrid.innerHTML = '';
    
    appData.sectors.forEach(sector => {
        const sectorOption = document.createElement('label');
        sectorOption.className = 'sector-option';
        
        sectorOption.innerHTML = `
            <input type="checkbox" name="sectors" value="${sector.id}" onchange="handleSectorSelection()">
            <div class="sector-card">
                <span class="sector-icon">${sector.icon}</span>
                <h4>${sector.name}</h4>
            </div>
        `;
        
        sectorGrid.appendChild(sectorOption);
    });
}

function populateSkillsGrid() {
    const skillsGrid = document.getElementById('skillsGrid');
    if (!skillsGrid) return;
    
    skillsGrid.innerHTML = '';
    
    appData.commonSkills.forEach(skill => {
        const skillOption = document.createElement('label');
        skillOption.className = 'skill-option';
        
        skillOption.innerHTML = `
            <input type="checkbox" name="skills" value="${skill}">
            <span class="skill-tag">${skill}</span>
        `;
        
        skillsGrid.appendChild(skillOption);
    });
}

function handleSectorSelection() {
    const selectedSectors = document.querySelectorAll('input[name="sectors"]:checked');
    const allSectorOptions = document.querySelectorAll('.sector-option');
    
    allSectorOptions.forEach(option => {
        const checkbox = option.querySelector('input[type="checkbox"]');
        const card = option.querySelector('.sector-card');
        
        if (!checkbox.checked && selectedSectors.length >= maxSelectedSectors) {
            card.classList.add('disabled');
            checkbox.disabled = true;
        } else {
            card.classList.remove('disabled');
            checkbox.disabled = false;
        }
    });
}

// Recommendation Generation
function generateRecommendations() {
    if (!validateCurrentStep()) {
        return;
    }
    
    // Collect user profile data
    collectUserProfile();
    
    // Show loading state
    showPage('recommendations');
    showLoadingState();
    
    // Simulate processing time
    setTimeout(() => {
        const recommendations = calculateRecommendations();
        displayRecommendations(recommendations);
        hideLoadingState();
    }, 2000);
}

function collectUserProfile() {
    const nameEl = document.getElementById('fullName');
    const ageEl = document.getElementById('age');
    const genderEl = document.querySelector('input[name="gender"]:checked');
    const educationEl = document.querySelector('input[name="education"]:checked');
    const stateEl = document.getElementById('preferredState');
    const relocateEl = document.querySelector('input[name="relocate"]:checked');
    const workModeEl = document.querySelector('input[name="workMode"]:checked');
    const sectorsEls = document.querySelectorAll('input[name="sectors"]:checked');
    const skillsEls = document.querySelectorAll('input[name="skills"]:checked');
    
    userProfile = {
        name: nameEl ? nameEl.value.trim() : '',
        age: ageEl ? parseInt(ageEl.value) : 0,
        gender: genderEl ? genderEl.value : '',
        education: educationEl ? educationEl.value : '',
        preferredState: stateEl ? stateEl.value : '',
        willingToRelocate: relocateEl ? relocateEl.value === 'yes' : false,
        workMode: workModeEl ? workModeEl.value : '',
        interestedSectors: Array.from(sectorsEls).map(cb => cb.value),
        skills: Array.from(skillsEls).map(cb => cb.value)
    };
}

function calculateRecommendations() {
    const scoredInternships = appData.sampleInternships.map(internship => {
        const score = calculateMatchScore(internship, userProfile);
        return { ...internship, matchScore: score };
    });
    
    // Sort by match score and return top 5
    return scoredInternships
        .sort((a, b) => b.matchScore - a.matchScore)
        .slice(0, 5);
}

function calculateMatchScore(internship, profile) {
    let totalScore = 0;
    
    // Sector Match (40% weight)
    const sectorScore = profile.interestedSectors.includes(internship.sector.id) ? 40 : 0;
    totalScore += sectorScore;
    
    // Location Match (25% weight)
    let locationScore = 0;
    if (internship.location.state === profile.preferredState) {
        locationScore = 25;
    } else if (profile.willingToRelocate) {
        locationScore = 15; // Partial score for willingness to relocate
    }
    totalScore += locationScore;
    
    // Education Match (20% weight)
    const userEducation = appData.educationLevels.find(edu => edu.id === profile.education);
    const requiredEducation = internship.education_required;
    const educationScore = userEducation && userEducation.weight >= requiredEducation.weight ? 20 : 0;
    totalScore += educationScore;
    
    // Skills Match (15% weight)
    const matchingSkills = internship.skills_required.filter(skill => 
        profile.skills.includes(skill)
    );
    const skillsScore = internship.skills_required.length > 0 ? 
        (matchingSkills.length / internship.skills_required.length) * 15 : 0;
    totalScore += skillsScore;
    
    return Math.max(Math.round(totalScore), 20); // Ensure minimum 20% match
}

function showLoadingState() {
    const loadingState = document.getElementById('loadingState');
    const recommendationsContainer = document.getElementById('recommendationsContainer');
    
    if (loadingState) loadingState.classList.remove('hidden');
    if (recommendationsContainer) recommendationsContainer.style.display = 'none';
}

function hideLoadingState() {
    const loadingState = document.getElementById('loadingState');
    const recommendationsContainer = document.getElementById('recommendationsContainer');
    
    if (loadingState) loadingState.classList.add('hidden');
    if (recommendationsContainer) recommendationsContainer.style.display = 'block';
}

function displayRecommendations(recommendations) {
    const container = document.getElementById('recommendationsContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (recommendations.length === 0) {
        container.innerHTML = `
            <div class="card">
                <div class="card__body">
                    <h3>No matching internships found</h3>
                    <p>Try adjusting your preferences and try again.</p>
                    <button class="btn btn--primary" onclick="goBackToForm()">Modify Profile</button>
                </div>
            </div>
        `;
        return;
    }
    
    recommendations.forEach((internship, index) => {
        const card = createRecommendationCard(internship, index);
        container.appendChild(card);
    });
}

function createRecommendationCard(internship, index) {
    const card = document.createElement('div');
    card.className = 'recommendation-card';
    
    const sector = appData.sectors.find(s => s.id === internship.sector.id);
    const sectorIcon = sector ? sector.icon : '🏢';
    
    card.innerHTML = `
        <div class="card-header">
            <div class="card-title-row">
                <div class="card-title">
                    <h3>${internship.title}</h3>
                    <div class="company-name">${internship.company}</div>
                </div>
                <div class="match-score">${internship.matchScore}% Match</div>
            </div>
            <div class="card-meta">
                <div class="location-badge">
                    <span>📍</span>
                    <span>${internship.location.district}, ${internship.location.state}</span>
                </div>
                <div class="sector-badge">
                    <span>${sectorIcon}</span>
                    <span>${internship.sector.name}</span>
                </div>
            </div>
        </div>
        <div class="card-body">
            <div class="benefits-list">
                ${internship.benefits.slice(0, 4).map(benefit => `
                    <div class="benefit-badge">
                        <span class="benefit-icon-small">✅</span>
                        <span>${benefit}</span>
                    </div>
                `).join('')}
            </div>
            <div class="card-actions">
                <button class="btn btn--outline" onclick="learnMore('${internship.id}')">
                    Learn More
                </button>
                <button class="btn btn--primary" onclick="applyInterest('${internship.id}')">
                    Apply Interest
                </button>
            </div>
        </div>
    `;
    
    return card;
}

function learnMore(internshipId) {
    const internship = appData.sampleInternships.find(i => i.id === internshipId);
    if (internship) {
        alert(`About ${internship.title} at ${internship.company}:\n\n${internship.description}\n\nDuration: ${internship.duration_months} months\nStipend: ₹${internship.stipend}/month\nType: ${internship.type}\n\nLocation: ${internship.location.district}, ${internship.location.state}\nSector: ${internship.sector.name}`);
    }
}

function applyInterest(internshipId) {
    const internship = appData.sampleInternships.find(i => i.id === internshipId);
    if (internship) {
        alert(`🎉 Thank you for your interest!\n\nYou have expressed interest in:\n${internship.title} at ${internship.company}\n\nYour application interest has been recorded. You will be contacted soon with next steps.\n\nInternship ID: ${internshipId}\n\nगुड लक! Good Luck!`);
    }
}