document.addEventListener('DOMContentLoaded', () => {
    const monthYearElement = document.getElementById('month-year');
    const calendarGrid = document.querySelector('.calendar-grid');
    const prevMonthButton = document.getElementById('prev-month');
    const nextMonthButton = document.getElementById('next-month');

    let currentDate = new Date();

    function renderCalendar(date) {
        calendarGrid.innerHTML = `
            <div class="day">Sun</div>
            <div class="day">Mon</div>
            <div class="day">Tue</div>
            <div class="day">Wed</div>
            <div class="day">Thu</div>
            <div class="day">Fri</div>
            <div class="day">Sat</div>
        `;

        const year = date.getFullYear();
        const month = date.getMonth();
        
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        monthYearElement.textContent = `${monthNames[month]} ${year}`;

        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Create empty divs for days before the first day of the month
        for (let i = 0; i < firstDayOfMonth; i++) {
            const emptyDiv = document.createElement('div');
            calendarGrid.appendChild(emptyDiv);
        }

        // Create divs for each day of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const dateDiv = document.createElement('div');
            dateDiv.textContent = day;
            dateDiv.classList.add('date');
            if (day === date.getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
                dateDiv.classList.add('today');
            }
            calendarGrid.appendChild(dateDiv);
        }
    }

    prevMonthButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    nextMonthButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    renderCalendar(currentDate);
});
