interface TimelineEvent {
    year: number;
    title: string;
    description: string;
}

const events: TimelineEvent[] = [
    {
        year: 2014,
        title: "BIM Technology Adoption",
        description: "Building Information Modeling becomes industry standard, revolutionizing project planning and coordination."
    },
    {
        year: 2016,
        title: "Drone Surveying",
        description: "Widespread adoption of drones for site surveys and progress monitoring, reducing manual labor and improving accuracy."
    },
    {
        year: 2018,
        title: "AI in Structural Analysis",
        description: "Introduction of machine learning algorithms for structural analysis and optimization."
    },
    {
        year: 2020,
        title: "3D Printed Construction",
        description: "First commercial 3D-printed buildings become reality, showing potential for automated construction."
    },
    {
        year: 2022,
        title: "Autonomous Construction Equipment",
        description: "Development of self-operating construction machinery for earthwork and material handling."
    },
    {
        year: 2023,
        title: "Digital Twin Technology",
        description: "Integration of IoT and digital twins for real-time monitoring and predictive maintenance."
    }
];

export default function Timeline() {
    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                Evolution of Civil Engineering Automation
            </h2>
            <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
                
                {events.map((event, index) => (
                    <div key={event.year} className={`mb-12 flex ${
                        index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    } items-center justify-center`}>
                        <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                            <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                            <p className="text-gray-600 mt-2">{event.description}</p>
                        </div>
                        <div className="w-2/12 flex justify-center">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-sm font-bold">{event.year}</span>
                            </div>
                        </div>
                        <div className="w-5/12"></div>
                    </div>
                ))}
            </div>
        </div>
    );
} 