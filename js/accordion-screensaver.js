// Accordion Screensaver Module
class AccordionScreensaver {
    constructor() {
        this.events = [];
        this.currentIndex = 0;
        this.expandedIndex = 0;
        this.intervalId = null;
        this.timerIntervalId = null;
        this.countdown = 10;
        this.currentTimerDuration = 10;
        this.isActive = false;
        
        // Color mapping from icalendar.rb
        this.colorMap = {
            "Event": "dodgerblue",
            "BusinessEvent": "gold",
            "CourseInstance": "gold", 
            "EducationEvent": "gold",
            "Hackathon": "gold",
            "ChildrensEvent": "deeppink",
            "ComedyEvent": "tomato",
            "DanceEvent": "tomato",
            "ExhibitionEvent": "lightsalmon",
            "Festival": "lightsalmon", 
            "FoodEvent": "orangered",
            "LiteraryEvent": "mediumpurple",
            "MusicEvent": "darkslateblue",
            "ScreeningEvent": "lightskyblue",
            "SocialEvent": "yellowgreen",
            "SportsEvent": "darkorange",
            "TheaterEvent": "lightskyblue",
            "VisualArtsEvent": "lightskyblue"
        };
        
        // Event type to hashtag mapping
        this.eventTypeMap = {
            "Event": "event",
            "BusinessEvent": "business",
            "CourseInstance": "course",
            "EducationEvent": "education",
            "Hackathon": "hackathon",
            "ChildrensEvent": "kids",
            "ComedyEvent": "comedy",
            "DanceEvent": "dance",
            "ExhibitionEvent": "exhibition",
            "Festival": "festival",
            "FoodEvent": "food",
            "LiteraryEvent": "books",
            "MusicEvent": "music",
            "ScreeningEvent": "screening",
            "SocialEvent": "social",
            "SportsEvent": "sports",
            "TheaterEvent": "theater",
            "VisualArtsEvent": "art"
        };
        
        this.createScreensaverHTML();
        this.bindEvents();
    }
    
    createScreensaverHTML() {
        const overlay = document.createElement('div');
        overlay.className = 'screensaver-overlay';
        overlay.innerHTML = `
            <div class="screensaver-header">
                <div class="screensaver-header-left">
                    <div class="event-meta-header">
                        <div class="meta-item">
                            <span>🕐</span>
                            <span class="header-time">--:--</span>
                        </div>
                        <div class="meta-item">
                            <span>📍</span>
                            <span class="header-location">Loading...</span>
                        </div>
                        <div class="event-type-tag">Loading...</div>
                    </div>
                </div>
                <div class="countdown-timer">10</div>
                <div class="screensaver-header-right">Loading Events...</div>
            </div>
            <div class="accordion-container">
                ${this.createAccordionItems()}
            </div>
            <div class="exit-hint">Click/ESC to exit • Arrow keys to navigate</div>
        `;
        document.body.appendChild(overlay);
        this.overlay = overlay;
        this.container = overlay.querySelector('.accordion-container');
        this.headerRight = overlay.querySelector('.screensaver-header-right');
        this.headerTime = overlay.querySelector('.header-time');
        this.headerLocation = overlay.querySelector('.header-location');
        this.eventTypeTag = overlay.querySelector('.event-type-tag');
        this.countdownTimer = overlay.querySelector('.countdown-timer');
    }
    
    createAccordionItems() {
        // Create exactly 5 items - no animations, no extra items needed
        return Array.from({length: 5}, (_, i) => `
            <div class="accordion-item ${i === 0 ? 'expanded' : 'collapsed'}" data-index="${i}">
                <div class="event-content">
                    <!-- Expanded view structure -->
                    <div class="top-right-container">
                        <div class="event-qr"></div>
                        <div class="event-date-calendar">
                            <div class="event-date-number">--</div>
                            <div class="event-date-month">---</div>
                        </div>
                    </div>
                    <div class="event-title-container">
                        <div class="event-title">Loading...</div>
                    </div>
                    <div class="event-description-container">
                        <img class="event-image" style="display: none;" />
                        <div class="event-description"></div>
                    </div>
                    
                    <!-- Collapsed view structure (hidden in expanded) -->
                    <div class="event-collapsed-title">Loading...</div>
                    <div class="event-collapsed-calendar">
                        <div class="event-date-number">--</div>
                        <div class="event-date-month">---</div>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    async loadEvents() {
        try {
            // Load events from JSON-LD script tags inside noscript tags
            const noscriptTags = document.querySelectorAll('noscript');
            const pageEvents = [];
            
            noscriptTags.forEach(noscript => {
                // Create a temporary div to parse noscript content
                const temp = document.createElement('div');
                temp.innerHTML = noscript.textContent;
                
                // Find script tags within the noscript content
                const scripts = temp.querySelectorAll('script[type="application/ld+json"]');
                
                scripts.forEach(script => {
                    try {
                        const eventData = JSON.parse(script.textContent);
                        // Check if it's a valid event with required fields
                        if (eventData && eventData['@type'] && eventData.name && eventData.startDate) {
                            pageEvents.push(eventData);
                        }
                    } catch (e) {
                        // Skip invalid JSON
                    }
                });
            });
            
            // Filter events for next 7 days
            const now = new Date();
            const sevenDaysFromNow = new Date(now.getTime() + (7 * 24 * 60 * 60 * 1000));
            
            this.events = pageEvents.filter(event => {
                try {
                    const startDate = new Date(event.startDate);
                    return startDate >= now && startDate <= sevenDaysFromNow;
                } catch (e) {
                    return false;
                }
            });
            
            // If no events in next 7 days, show message
            if (this.events.length === 0) {
                this.headerRight.textContent = 'No Events in Next 7 Days';
                return;
            }
            
            // Cycle through events if less than 5
            while (this.events.length < 5) {
                this.events = [...this.events, ...this.events];
            }
            
            this.updateDisplay();
            
        } catch (error) {
            console.error('Error loading events:', error);
            this.headerRight.textContent = 'Error Loading Events';
        }
    }
    
    updateDisplay() {
        const items = this.container.querySelectorAll('.accordion-item');
        const pageTitle = document.title;
        
        // Get the current expanded event for header
        const currentEvent = this.events[(this.currentIndex + this.expandedIndex) % this.events.length];
        this.updateHeader(pageTitle, currentEvent);
        
        items.forEach((item, index) => {
            const eventIndex = (this.currentIndex + index) % this.events.length;
            const event = this.events[eventIndex];
            
            if (!event) return;
            
            const isExpanded = index === this.expandedIndex;
            const color = this.colorMap[event['@type']] || this.colorMap['Event'];
            
            item.className = `accordion-item ${isExpanded ? 'expanded' : 'collapsed'}`;
            item.setAttribute('data-color', color);
            
            const content = item.querySelector('.event-content');
            
            // Get elements for both expanded and collapsed views
            const expandedTitle = content.querySelector('.event-title');
            const collapsedTitle = content.querySelector('.event-collapsed-title');
            const expandedDateNumber = content.querySelector('.event-date-calendar .event-date-number');
            const expandedDateMonth = content.querySelector('.event-date-calendar .event-date-month');
            const collapsedDateNumber = content.querySelector('.event-collapsed-calendar .event-date-number');
            const collapsedDateMonth = content.querySelector('.event-collapsed-calendar .event-date-month');
            const description = content.querySelector('.event-description');
            const image = content.querySelector('.event-image');
            const qrDiv = content.querySelector('.event-qr');
            
            // Truncate title to 80 characters for collapsed view
            const eventTitle = event.name || 'Untitled Event';
            const truncatedTitle = eventTitle.length > 80 ? eventTitle.substring(0, 80) + '...' : eventTitle;
            
            if (expandedTitle) {
                expandedTitle.textContent = eventTitle;
                // Reset title styling for new event
                expandedTitle.style.fontSize = '';
            }
            if (collapsedTitle) collapsedTitle.textContent = truncatedTitle;
            
            // Format date and time
            if (event.startDate) {
                const startDate = new Date(event.startDate);
                const day = startDate.getDate();
                const month = startDate.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
                const dayOfWeek = startDate.getDay(); // 0 = Sunday, 6 = Saturday
                
                // Set date for both expanded and collapsed views
                if (expandedDateNumber) expandedDateNumber.textContent = day;
                if (expandedDateMonth) expandedDateMonth.textContent = month;
                if (collapsedDateNumber) collapsedDateNumber.textContent = day;
                if (collapsedDateMonth) collapsedDateMonth.textContent = month;
                
                // Add weekend styling if it's Saturday or Sunday
                const expandedCalendar = content.querySelector('.event-date-calendar');
                const collapsedCalendar = content.querySelector('.event-collapsed-calendar');
                
                if (dayOfWeek === 0 || dayOfWeek === 6) { // Sunday or Saturday
                    if (expandedCalendar) expandedCalendar.classList.add('weekend');
                    if (collapsedCalendar) collapsedCalendar.classList.add('weekend');
                } else {
                    if (expandedCalendar) expandedCalendar.classList.remove('weekend');
                    if (collapsedCalendar) collapsedCalendar.classList.remove('weekend');
                }
            }
            
            // Description (only show in expanded view)
            if (isExpanded && event.description) {
                // Process description content (HTML or plain text)
                const processedDescription = this.processDescription(event.description);
                description.innerHTML = processedDescription;
                description.style.display = 'block';
                
                // Reset font size to default for new event
                description.style.fontSize = '';
                
                // Check content length for image sizing (use text length, not HTML)
                const textLength = description.textContent.length;
                const totalContentLength = (event.name || '').length + textLength;
                if (totalContentLength < 300) {
                    item.classList.add('short-content');
                } else {
                    item.classList.remove('short-content');
                }
            } else {
                description.style.display = 'none';
                item.classList.remove('short-content');
            }
            
            // Image (only show in expanded view)
            if (isExpanded && event.image) {
                let imageUrl = '';
                if (typeof event.image === 'string') {
                    imageUrl = event.image;
                } else if (event.image.url) {
                    imageUrl = event.image.url;
                }
                
                if (imageUrl && imageUrl.startsWith('http')) {
                    image.src = imageUrl;
                    image.style.display = 'block';
                    
                    // Hide image if it fails to load
                    image.onerror = function() {
                        this.style.display = 'none';
                    };
                    
                    // Show image when it loads successfully
                    image.onload = function() {
                        this.style.display = 'block';
                    };
                } else {
                    image.style.display = 'none';
                }
            } else {
                image.style.display = 'none';
            }
            
            // QR Code (only show in expanded view)
            if (isExpanded && event.url && qrDiv) {
                qrDiv.innerHTML = '';
                try {
                    if (window.QRCode && window.QRCode.toDataURL) {
                        window.QRCode.toDataURL(event.url, {
                            width: 80,
                            height: 80,
                            color: {
                                dark: '#000000',
                                light: '#ffffff'
                            }
                        }, function (err, url) {
                            if (!err && url) {
                                const qrImg = document.createElement('img');
                                qrImg.src = url;
                                qrImg.style.width = '80px';
                                qrImg.style.height = '80px';
                                qrDiv.appendChild(qrImg);
                            } else {
                                // Fallback to service
                                const qrImg = document.createElement('img');
                                qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=80x80&bgcolor=ffffff&color=000000&data=${encodeURIComponent(event.url)}`;
                                qrImg.style.width = '80px';
                                qrImg.style.height = '80px';
                                qrDiv.appendChild(qrImg);
                            }
                        });
                    } else {
                        // Fallback: generate QR code using a simple service
                        const qrImg = document.createElement('img');
                        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=80x80&bgcolor=ffffff&color=000000&data=${encodeURIComponent(event.url)}`;
                        qrImg.style.width = '80px';
                        qrImg.style.height = '80px';
                        qrDiv.appendChild(qrImg);
                    }
                } catch (error) {
                    console.warn('Error generating QR code:', error);
                    // Final fallback to service
                    const qrImg = document.createElement('img');
                    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=80x80&bgcolor=ffffff&color=000000&data=${encodeURIComponent(event.url)}`;
                    qrImg.style.width = '80px';
                    qrImg.style.height = '80px';
                    qrDiv.appendChild(qrImg);
                }
            } else if (qrDiv) {
                qrDiv.innerHTML = '';
            }
            
            // Auto-fit description text to prevent scrolling
            if (isExpanded && description && description.textContent.trim()) {
                setTimeout(() => {
                    this.adjustDescriptionSize(content, description);
                }, 10);
            }
            
            // Adjust heading to exactly 2 lines
            if (isExpanded && expandedTitle && expandedTitle.textContent.trim()) {
                setTimeout(() => {
                    this.adjustTitleLines(expandedTitle);
                }, 10);
            }
            
            // Calculate and set timer duration based on expanded event's description
            if (isExpanded && description) {
                setTimeout(() => {
                    const newDuration = this.calculateTimerDuration(description);
                    if (newDuration !== this.currentTimerDuration) {
                        this.currentTimerDuration = newDuration;
                        // Restart timer with new duration if currently running
                        if (this.timerIntervalId) {
                            this.stopTimer();
                            this.startTimer();
                        }
                    }
                }, 15); // Slight delay after description is processed
            }
        });
    }
    
    updateHeader(pageTitle, currentEvent) {
        // Update the calendar title with format: "$CALENDAR_NAME (blr.today)"
        this.headerRight.textContent = `${pageTitle} Calendar | https://blr.today`;
        
        if (currentEvent) {
            // Update time
            if (currentEvent.startDate) {
                const startDate = new Date(currentEvent.startDate);
                const timeStr = startDate.toLocaleTimeString('en-IN', { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                });
                this.headerTime.textContent = timeStr;
            }
            
            // Update location
            let locationText = 'TBD';
            if (currentEvent.location) {
                if (typeof currentEvent.location === 'string') {
                    locationText = currentEvent.location.substring(0, 30);
                } else if (currentEvent.location.name) {
                    locationText = currentEvent.location.name.split(",")[0].substring(0, 30);
                } else if (currentEvent.location.address && currentEvent.location.address.addressLocality) {
                    locationText = currentEvent.location.address.addressLocality;
                }
            }
            this.headerLocation.textContent = locationText;
            
            // Update event type tag
            const eventType = currentEvent['@type'] || 'Event';
            const hashtag = `#${this.eventTypeMap[eventType] || 'event'}`;
            const color = this.colorMap[eventType] || this.colorMap['Event'];
            
            this.eventTypeTag.textContent = hashtag;
            if (hashtag == "#event") {
                this.eventTypeTag.style.display = "none";
            } else {
                this.eventTypeTag.style.display = "inline-block";
            }
            this.eventTypeTag.style.backgroundColor = this.isLightColor(color) ? '#000' : '#fff';
            this.eventTypeTag.style.color = color;
        }
    }
    
    isLightColor(color) {
        // Simple check for light colors that need dark text
        const lightColors = ['gold', 'lightsalmon', 'lightskyblue', 'yellowgreen'];
        return lightColors.includes(color);
    }
    
    processDescription(description) {
        if (!description) return '';
        
        // Check if the description contains HTML tags
        const hasHTML = this.containsHTML(description);
        
        if (hasHTML) {
            // Already contains HTML, use as-is
            return description;
        } else {
            // Plain text, convert newlines to <br> tags
            return description.replace(/\n/g, '<br>');
        }
    }
    
    containsHTML(text) {
        // Simple HTML detection - looks for common HTML patterns
        const htmlPatterns = [
            /<[^>]+>/,           // Any HTML tag
            /&[a-zA-Z0-9#]+;/,   // HTML entities
            /<\/[^>]+>/          // Closing tags specifically
        ];
        
        return htmlPatterns.some(pattern => pattern.test(text));
    }
    
    adjustDescriptionSize(container, descriptionElement) {
        const maxAttempts = 10;
        let attempts = 0;
        let currentFontSize = parseFloat(getComputedStyle(descriptionElement).fontSize);
        const minFontSize = 12; // Minimum readable font size
        
        const checkAndAdjust = () => {
            attempts++;
            
            // Check if container is scrolling
            const isScrolling = container.scrollHeight > container.clientHeight;
            
            if (isScrolling && currentFontSize > minFontSize && attempts < maxAttempts) {
                // Reduce font size by 10%
                currentFontSize = Math.max(currentFontSize * 0.9, minFontSize);
                descriptionElement.style.fontSize = currentFontSize + 'px';
                
                // Check again after a brief delay for DOM to update
                setTimeout(checkAndAdjust, 50);
            }
        };
        
        checkAndAdjust();
    }
    
    adjustTitleLines(titleElement) {
        const maxAttempts = 50;
        let attempts = 0;
        
        // Force a layout calculation to prevent reflow issues
        const container = titleElement.closest('.event-title-container');
        const containerHeight = container.offsetHeight;
        
        const getLineCount = () => {
            const computedStyle = getComputedStyle(titleElement);
            const lineHeight = parseFloat(computedStyle.lineHeight);
            const height = titleElement.offsetHeight;
            return Math.round(height / lineHeight);
        };
        
        const adjustForLines = () => {
            attempts++;
            
            // Use requestAnimationFrame to batch DOM operations
            requestAnimationFrame(() => {
                const lineCount = getLineCount();
                
                if (lineCount > 2 && attempts < maxAttempts) {
                    // Decrease font size to fit in 2 lines max
                    const currentFontSize = parseFloat(getComputedStyle(titleElement).fontSize);
                    const newFontSize = Math.max(currentFontSize * 0.95, 16); // Minimum 16px
                    
                    // Batch the style change
                    titleElement.style.fontSize = newFontSize + 'px';
                    
                    // Continue adjusting
                    setTimeout(adjustForLines, 1);
                } else {
                    // Ensure container height remains stable
                    container.style.height = containerHeight + 'px';
                }
            });
        };
        
        adjustForLines();
    }
    
    advance() {
        this.currentIndex = (this.currentIndex + 1) % this.events.length;
        this.resetTimer();
        this.updateDisplay();
    }
    
    async show() {
        if (this.isActive) return;
        
        this.isActive = true;
        document.body.style.overflow = 'hidden';
        this.overlay.style.display = 'flex';
        
        // Load fresh event data
        await this.loadEvents();
        
        // Enter fullscreen
        this.enterFullscreen();
        
        // Start countdown timer
        this.startTimer();
    }
    
    hide() {
        if (!this.isActive) return;
        
        this.isActive = false;
        document.body.style.overflow = '';
        this.overlay.style.display = 'none';
        
        // Stop countdown timer
        this.stopTimer();
        
        // Exit fullscreen
        this.exitFullscreen();
    }
    
    goBack() {
        this.currentIndex = (this.currentIndex - 1 + this.events.length) % this.events.length;
        this.resetTimer();
        this.updateDisplay();
    }
    
    resetTimer() {
        this.countdown = this.currentTimerDuration;
        if (this.countdownTimer) {
            this.countdownTimer.textContent = this.countdown;
        }
    }
    
    startTimer() {
        this.resetTimer();
        this.timerIntervalId = setInterval(() => {
            this.countdown--;
            if (this.countdownTimer) {
                this.countdownTimer.textContent = this.countdown;
            }
            
            if (this.countdown <= 0) {
                this.advance();
            }
        }, 1000);
    }
    
    stopTimer() {
        if (this.timerIntervalId) {
            clearInterval(this.timerIntervalId);
            this.timerIntervalId = null;
        }
    }
    
    calculateTimerDuration(descriptionElement) {
        if (!descriptionElement || !descriptionElement.innerText) {
            return 10; // Default to shortest time if no description
        }
        
        const words = descriptionElement.innerText.trim().split(/\s+/).filter(word => word.length > 0);
        const wordCount = words.length;
        
        if (wordCount <= 50) {
            return 10; // Short descriptions: 10 seconds
        } else if (wordCount <= 150) {
            return 20; // Medium descriptions: 20 seconds
        } else {
            return 30; // Long descriptions: 30 seconds
        }
    }
    
    async enterFullscreen() {
        try {
            if (document.documentElement.requestFullscreen) {
                await document.documentElement.requestFullscreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                await document.documentElement.webkitRequestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) {
                await document.documentElement.msRequestFullscreen();
            }
        } catch (error) {
            console.warn('Could not enter fullscreen:', error);
        }
    }
    
    async exitFullscreen() {
        try {
            if (document.exitFullscreen) {
                await document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                await document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                await document.msExitFullscreen();
            }
        } catch (error) {
            console.warn('Could not exit fullscreen:', error);
        }
    }
    
    bindEvents() {
        // Exit on click or ESC
        this.overlay.addEventListener('click', () => {
            this.hide();
        });
        
        document.addEventListener('keydown', (e) => {
            if (!this.isActive) return;
            
            if (e.key === 'Escape') {
                this.hide();
            } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                this.advance();
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                this.goBack();
            }
        });
        
        // Prevent text selection
        this.overlay.addEventListener('selectstart', (e) => {
            e.preventDefault();
        });
    }
}

// Export for use in events.html
window.AccordionScreensaver = AccordionScreensaver;