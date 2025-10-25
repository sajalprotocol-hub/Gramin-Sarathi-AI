// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .scheme-card, .testimonial-card, .calculator-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// Language Toggle with actual translation
const translations = {
    hi: {
        navHome: "होम",
        navFeatures: "विशेषताएं",
        navCalculator: "कैलकुलेटर",
        navVoice: "आवाज़",
        navSchemes: "योजनाएं",
        navFaq: "FAQ",
        navContact: "संपर्क",
        heroTitle: 'आपका भरोसेमंद वित्तीय साथी',
        heroDesc: 'ग्रामीण सारथी AI आपको आसान भाषा में बैंकिंग, सरकारी योजनाओं और वित्तीय सेवाओं की जानकारी देता है। अब वित्तीय जानकारी सिर्फ एक सवाल दूर है!',
        startBtn: 'अभी शुरू करें',
        learnBtn: 'और जानें',
        featuresTitle: 'हमारी विशेषताएं',
        feature1Title: 'आसान भाषा में जवाब',
        feature1Desc: 'हम जटिल वित्तीय शब्दों को सरल हिंदी में समझाते हैं, जैसे गांव का बैंक मित्र समझाता है।',
        feature2Title: 'सरकारी योजनाएं',
        feature2Desc: 'PM-KISAN, PMFBY, KCC और अन्य सभी सरकारी योजनाओं की पूरी जानकारी एक जगह पर।',
        feature3Title: 'सुरक्षित और भरोसेमंद',
        feature3Desc: 'हम कभी भी आपकी निजी जानकारी नहीं मांगते। आपकी सुरक्षा हमारी प्राथमिकता है।',
        feature4Title: '24/7 उपलब्ध',
        feature4Desc: 'कभी भी, कहीं भी अपने सवाल पूछें। हम हमेशा आपकी मदद के लिए तैयार हैं।',
        feature5Title: 'वॉइस सपोर्ट',
        feature5Desc: 'बोलकर पूछें, सुनकर समझें। टाइपिंग की कोई जरूरत नहीं।',
        feature6Title: 'पात्रता जांच',
        feature6Desc: 'आसान सवालों के जरिए जानें कि आप किस योजना के लिए पात्र हैं।',
        calcTitle: 'वित्तीय कैलकुलेटर',
        calcDesc: 'अपने लोन और निवेश की गणना करें',
        emiCalc: 'EMI कैलकुलेटर',
        insuranceCalc: 'फसल बीमा प्रीमियम',
        sipCalc: 'SIP रिटर्न कैलकुलेटर',
        voiceTitle: 'अपनी आवाज़ से पूछें',
        voiceDesc: 'सरकारी योजनाओं, बीमा और वित्तीय उत्पादों के बारे में व्यक्तिगत सलाह पाने के लिए अपनी आवाज़ का उपयोग करें।',
        voiceStatus: 'बोलने के लिए माइक पर टैप करें',
        schemesTitle: 'लोकप्रिय योजनाएं',
        scheme1: 'किसान क्रेडिट कार्ड',
        scheme1Desc: 'कम ब्याज दर पर खेती के लिए लोन। ब्याज दर: 4% तक',
        scheme2: 'PM-KISAN योजना',
        scheme2Desc: 'साल में ₹6000 की सीधी मदद। तीन किस्तों में ₹2000',
        scheme3: 'फसल बीमा योजना',
        scheme3Desc: 'प्राकृतिक आपदा से फसल की सुरक्षा। प्रीमियम: 1.5-2%',
        scheme4: 'मुद्रा लोन',
        scheme4Desc: 'छोटे व्यवसाय के लिए लोन। ₹10 लाख तक बिना गारंटी',
        scheme5: 'आयुष्मान भारत',
        scheme5Desc: '₹5 लाख तक का मुफ्त इलाज। पूरे परिवार के लिए',
        scheme6: 'प्रधानमंत्री आवास योजना',
        scheme6Desc: 'घर बनाने के लिए मदद। ₹2.5 लाख तक की सब्सिडी',
        testimonialTitle: 'लोगों ने क्या कहा',
        faqTitle: 'अक्सर पूछे जाने वाले सवाल (FAQ)',
        contactTitle: 'हमसे संपर्क करें',
        contactInfo: 'संपर्क जानकारी',
        sendMessage: 'संदेश भेजें',
        footerTagline: 'Made with ❤️ for Rural India'
    },
    en: {
        navHome: "Home",
        navFeatures: "Features",
        navCalculator: "Calculator",
        navVoice: "Voice",
        navSchemes: "Schemes",
        navFaq: "FAQ",
        navContact: "Contact",
        heroTitle: 'Your Trusted Financial Partner',
        heroDesc: 'Gramin Sarathi AI provides you with easy-to-understand information about banking, government schemes, and financial services. Financial information is just one question away!',
        startBtn: 'Get Started',
        learnBtn: 'Learn More',
        featuresTitle: 'Our Features',
        feature1Title: 'Simple Language Answers',
        feature1Desc: 'We explain complex financial terms in simple language, just like your village Bank Mitra would.',
        feature2Title: 'Government Schemes',
        feature2Desc: 'Complete information about PM-KISAN, PMFBY, KCC and all other government schemes in one place.',
        feature3Title: 'Safe and Trustworthy',
        feature3Desc: 'We never ask for your personal information. Your security is our priority.',
        feature4Title: '24/7 Available',
        feature4Desc: 'Ask your questions anytime, anywhere. We are always ready to help you.',
        feature5Title: 'Voice Support',
        feature5Desc: 'Ask by speaking, understand by listening. No need for typing.',
        feature6Title: 'Eligibility Check',
        feature6Desc: 'Find out which schemes you are eligible for through simple questions.',
        calcTitle: 'Financial Calculators',
        calcDesc: 'Calculate your loans and investments',
        emiCalc: 'EMI Calculator',
        insuranceCalc: 'Crop Insurance Premium',
        sipCalc: 'SIP Return Calculator',
        voiceTitle: 'Ask with Your Voice',
        voiceDesc: 'Use your voice to get personalized advice on government schemes, insurance, and financial products.',
        voiceStatus: 'Tap on mic to speak',
        schemesTitle: 'Popular Schemes',
        scheme1: 'Kisan Credit Card',
        scheme1Desc: 'Low interest loan for farming. Interest rate: up to 4%',
        scheme2: 'PM-KISAN Scheme',
        scheme2Desc: 'Direct help of ₹6000 per year. ₹2000 in three installments',
        scheme3: 'Crop Insurance Scheme',
        scheme3Desc: 'Crop protection from natural disasters. Premium: 1.5-2%',
        scheme4: 'Mudra Loan',
        scheme4Desc: 'Loan for small businesses. Up to ₹10 lakh without guarantee',
        scheme5: 'Ayushman Bharat',
        scheme5Desc: 'Free treatment up to ₹5 lakh. For entire family',
        scheme6: 'PM Housing Scheme',
        scheme6Desc: 'Help to build house. Subsidy up to ₹2.5 lakh',
        testimonialTitle: 'What People Say',
        faqTitle: 'Frequently Asked Questions (FAQ)',
        contactTitle: 'Contact Us',
        contactInfo: 'Contact Information',
        sendMessage: 'Send Message',
        footerTagline: 'Made with ❤️ for Rural India'
    }
};

let currentLang = 'hi';

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentLang = this.getAttribute('data-lang');
        translatePage(currentLang);
    });
});

function translatePage(lang) {
    const t = translations[lang];
    
    // Nav Links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks[0].textContent = t.navHome;
    navLinks[1].textContent = t.navFeatures;
    navLinks[2].textContent = t.navCalculator;
    navLinks[3].textContent = t.navVoice;
    navLinks[4].textContent = t.navSchemes;
    navLinks[5].textContent = t.navFaq;
    navLinks[6].textContent = t.navContact;

    // Hero Section
    document.querySelector('.hero-text h1').textContent = t.heroTitle;
    document.querySelector('.hero-text p').textContent = t.heroDesc;
    document.querySelector('.btn-primary').textContent = t.startBtn;
    document.querySelector('.btn-secondary').textContent = t.learnBtn;
    
    // Features Section
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards[0].querySelector('h3').textContent = t.feature1Title;
    featureCards[0].querySelector('p').textContent = t.feature1Desc;
    featureCards[1].querySelector('h3').textContent = t.feature2Title;
    featureCards[1].querySelector('p').textContent = t.feature2Desc;
    featureCards[2].querySelector('h3').textContent = t.feature3Title;
    featureCards[2].querySelector('p').textContent = t.feature3Desc;
    featureCards[3].querySelector('h3').textContent = t.feature4Title;
    featureCards[3].querySelector('p').textContent = t.feature4Desc;
    featureCards[4].querySelector('h3').textContent = t.feature5Title;
    featureCards[4].querySelector('p').textContent = t.feature5Desc;
    featureCards[5].querySelector('h3').textContent = t.feature6Title;
    featureCards[5].querySelector('p').textContent = t.feature6Desc;
    
    // Calculator Section
    document.querySelector('.calculator-section .section-title').textContent = t.calcTitle;
    document.querySelector('.calculator-description').textContent = t.calcDesc;
    document.querySelectorAll('.calculator-card h3')[0].innerHTML = '🏦 ' + t.emiCalc;
    document.querySelectorAll('.calculator-card h3')[1].innerHTML = '🌾 ' + t.insuranceCalc;
    document.querySelectorAll('.calculator-card h3')[2].innerHTML = '💰 ' + t.sipCalc;
    
    // Voice Section
    document.querySelector('.voice-section h2').textContent = t.voiceTitle;
    document.querySelector('.voice-section > p').textContent = t.voiceDesc;
    document.getElementById('voiceStatus').textContent = t.voiceStatus;
    
    // Schemes Section
    const schemeCards = document.querySelectorAll('.scheme-card');
    schemeCards[0].querySelector('h3').innerHTML = '🌾 ' + t.scheme1;
    schemeCards[0].querySelector('p').textContent = t.scheme1Desc;
    schemeCards[1].querySelector('h3').innerHTML = '💰 ' + t.scheme2;
    schemeCards[1].querySelector('p').textContent = t.scheme2Desc;
    schemeCards[2].querySelector('h3').innerHTML = '🛡️ ' + t.scheme3;
    schemeCards[2].querySelector('p').textContent = t.scheme3Desc;
    schemeCards[3].querySelector('h3').innerHTML = '🏦 ' + t.scheme4;
    schemeCards[3].querySelector('p').textContent = t.scheme4Desc;
    schemeCards[4].querySelector('h3').innerHTML = '👵 ' + t.scheme5;
    schemeCards[4].querySelector('p').textContent = t.scheme5Desc;
    schemeCards[5].querySelector('h3').innerHTML = '🏠 ' + t.scheme6;
    schemeCards[5].querySelector('p').textContent = t.scheme6Desc;
    
    // Section Titles
    document.querySelector('#features .section-title').textContent = t.featuresTitle;
    document.querySelector('#schemes .section-title').textContent = t.schemesTitle;
    document.querySelector('#testimonialTitle').textContent = t.testimonialTitle;
    document.querySelector('#faq .section-title').textContent = t.faqTitle;
    document.querySelector('#contact .section-title').textContent = t.contactTitle;
    
    // Contact Section
    document.querySelectorAll('.contact-subtitle')[0].textContent = t.contactInfo;
    document.querySelectorAll('.contact-subtitle')[1].textContent = t.sendMessage;
    
    // Footer
    document.querySelector('.footer-tagline').textContent = t.footerTagline;
}

// Voice Recognition
const voiceButton = document.getElementById('voiceButton');
const voiceStatus = document.getElementById('voiceStatus');
const voiceTranscript = document.getElementById('voiceTranscript');
const transcriptText = document.getElementById('transcriptText');
const rippleContainer = document.getElementById('rippleContainer');

let isRecording = false;
let recognition;

if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.lang = 'hi-IN';
    recognition.continuous = false;
    recognition.interimResults = true;

    recognition.onstart = function() {
        isRecording = true;
        voiceButton.classList.add('active');
        voiceStatus.textContent = '🎙️ सुन रहे हैं...';
        createRipples();
    };

    recognition.onresult = function(event) {
        const transcript = Array.from(event.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('');

        transcriptText.textContent = transcript;
        voiceTranscript.classList.add('show');
    };

    recognition.onend = function() {
        isRecording = false;
        voiceButton.classList.remove('active');
        voiceStatus.textContent = 'प्रोसेस कर रहे हैं...';
        removeRipples();
        
        setTimeout(() => {
            voiceStatus.textContent = 'बोलने के लिए माइक पर टैप करें';
            
            if (transcriptText.textContent) {
                setTimeout(() => {
                    const responses = [
                        'मैं आपकी मदद के लिए यहाँ हूँ! किसान क्रेडिट कार्ड के बारे में अधिक जानकारी के लिए, कृपया अपना सवाल पूछें।',
                        'धन्यवाद! आपके सवाल के आधार पर मैं आपको सही जानकारी प्रदान करूंगा।',
                        'बहुत बढ़िया! मैं आपकी मदद करने के लिए तैयार हूँ।'
                    ];
                    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                    alert('ग्रामीण सारथी AI:\n\n' + randomResponse);
                }, 1000);
            }
        }, 1500);
    };

    recognition.onerror = function(event) {
        console.error('Speech recognition error:', event.error);
        voiceStatus.textContent = 'कुछ गलत हुआ। कृपया फिर से कोशिश करें।';
        voiceButton.classList.remove('active');
        removeRipples();
    };
}

voiceButton.addEventListener('click', function() {
    if (recognition) {
        if (!isRecording) {
            voiceTranscript.classList.remove('show');
            transcriptText.textContent = '';
            recognition.start();
        } else {
            recognition.stop();
        }
    } else {
        alert('क्षमा करें! आपका ब्राउज़र वॉइस रिकग्निशन को सपोर्ट नहीं करता।\n\nकृपया Chrome या Safari का उपयोग करें।');
    }
});

function createRipples() {
    rippleContainer.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        const ripple = document.createElement('div');
        ripple.classList.add('ripple');
        rippleContainer.appendChild(ripple);
    }
}

function removeRipples() {
    rippleContainer.innerHTML = '';
}

// Calculator Functions
function calculateEMI() {
    const principal = parseFloat(document.getElementById('loanAmount').value);
    const rate = parseFloat(document.getElementById('interestRate').value) / 12 / 100;
    const time = parseFloat(document.getElementById('loanTenure').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate <= 0 || time <= 0) {
        alert('कृपया सभी फील्ड में सही मान भरें');
        return;
    }

    const emi = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
    
    document.getElementById('emiAmount').textContent = '₹' + Math.round(emi).toLocaleString('en-IN');
    document.getElementById('emiResult').classList.add('show');
}

function calculateInsurance() {
    const insured = parseFloat(document.getElementById('insuredAmount').value);
    const rate = parseFloat(document.getElementById('premiumRate').value) / 100;

    if (isNaN(insured) || isNaN(rate) || insured <= 0 || rate <= 0) {
        alert('कृपया सभी फील्ड में सही मान भरें');
        return;
    }

    const premium = insured * rate;
    
    document.getElementById('insuranceAmount').textContent = '₹' + Math.round(premium).toLocaleString('en-IN');
    document.getElementById('insuranceResult').classList.add('show');
}

function calculateSIP() {
    const monthly = parseFloat(document.getElementById('sipAmount').value);
    const annualRate = parseFloat(document.getElementById('sipReturn').value);
    const years = parseFloat(document.getElementById('sipYears').value);

    if (isNaN(monthly) || isNaN(annualRate) || isNaN(years) || monthly <= 0 || annualRate <= 0 || years <= 0) {
        alert('कृपया सभी फील्ड में सही मान भरें');
        return;
    }

    const rate = annualRate / 12 / 100;
    const months = years * 12;

    const futureValue = monthly * (Math.pow(1 + rate, months) - 1) / rate * (1 + rate);
    const invested = monthly * months;
    const gain = futureValue - invested;
    
    document.getElementById('sipTotalAmount').textContent = '₹' + Math.round(futureValue).toLocaleString('en-IN');
    document.getElementById('sipInvested').textContent = '₹' + Math.round(invested).toLocaleString('en-IN');
    document.getElementById('sipGain').textContent = '₹' + Math.round(gain).toLocaleString('en-IN');
    document.getElementById('sipResult').classList.add('show');
}

// FAQ Toggle
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('active');
        }
    });
    
    if (!isActive) {
        faqItem.classList.add('active');
    } else {
        faqItem.classList.remove('active');
    }
}

// Chat Widget
function toggleChat() {
    const chatBox = document.getElementById('chatBox');
    chatBox.classList.toggle('show');
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (message) {
        const messagesDiv = document.getElementById('chatMessages');
        
        // User message
        const userBubble = document.createElement('div');
        userBubble.className = 'chat-bubble user';
        userBubble.textContent = message;
        messagesDiv.appendChild(userBubble);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
        
        input.value = '';
        
        // AI response (simulated)
        setTimeout(() => {
            const aiBubble = document.createElement('div');
            aiBubble.className = 'chat-bubble';
            aiBubble.textContent = 'धन्यवाद! मैं आपके सवाल का जवाब देने के लिए काम कर रहा हूँ। कृपया थोड़ा इंतजार करें।';
            messagesDiv.appendChild(aiBubble);
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        }, 1000);
    }
}

// Handle Enter key in chat
document.getElementById('chatInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Contact Form Submit
function submitForm(e) {
    e.preventDefault();
    alert('धन्यवाद! आपका संदेश प्राप्त हो गया है। हम जल्द ही आपसे संपर्क करेंगे।');
    e.target.reset();
}