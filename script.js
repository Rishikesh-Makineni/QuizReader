// Sample Data (Replace with actual data fetching in a real scenario)
const sampleData = {
    totalObservations: 200,
    criticalObservations: 50,
    trendData: [10, 15, 20, 25, 30, 35, 40], // Example trend data
    comments: [
        { date: "2024-10-01", comment: "Critical electrical hazard found near transformer." },
        { date: "2024-10-05", comment: "Slip hazard identified on wet stairs." },
        { date: "2024-10-10", comment: "Chemical spill reported near storage area." }
    ]
};

// Updating key metrics if on index.html
if (document.getElementById("total-observations")) {
    document.getElementById("total-observations").textContent = sampleData.totalObservations;
    document.getElementById("critical-observations").textContent = sampleData.criticalObservations;
}

// Render Trend Chart if on trend.html
if (document.getElementById("trendChart")) {
    const ctxTrend = document.getElementById('trendChart').getContext('2d');
    new Chart(ctxTrend, {
        type: 'line',
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // Sample months
            datasets: [{
                label: 'Critical Observations Over Time',
                data: sampleData.trendData,
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)'
            }]
        }
    });
}

// Populate Critical Comments Table if on critical_comments.html
if (document.getElementById("comments-table")) {
    const commentsTable = document.getElementById("comments-table").querySelector("tbody");
    sampleData.comments.forEach(comment => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${comment.date}</td><td>${comment.comment}</td>`;
        commentsTable.appendChild(row);
    });
}
