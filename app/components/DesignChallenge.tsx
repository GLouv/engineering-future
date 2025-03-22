'use client';

import { useState } from 'react';

interface EngineeringElement {
    id: string;
    name: string;
    category: string;
    description: string;
    icon: string;
}

interface Challenge {
    id: number;
    title: string;
    description: string;
    constraints: string[];
    aiSuggestion: string;
    availableElements: EngineeringElement[];
    requiredCategories: string[];
}

const engineeringElements: EngineeringElement[] = [
    { id: 'recycled-steel', name: 'Recycled Steel', category: 'material', description: 'High-strength recycled steel beams', icon: '🏗️' },
    { id: 'solar-panels', name: 'Solar Panels', category: 'energy', description: 'Renewable energy source', icon: '☀️' },
    { id: 'smart-sensors', name: 'IoT Sensors', category: 'technology', description: 'Real-time monitoring devices', icon: '📡' },
    { id: 'green-roof', name: 'Green Roof', category: 'sustainability', description: 'Living roof system', icon: '🌱' },
    { id: 'rainwater', name: 'Rainwater System', category: 'water', description: 'Water collection and filtration', icon: '💧' },
    { id: 'automation', name: 'AI Controller', category: 'technology', description: 'Smart building management', icon: '🤖' },
];

const challenges: Challenge[] = [
    {
        id: 1,
        title: "Sustainable Bridge Design",
        description: "Design a pedestrian bridge with minimal environmental impact by dragging and dropping the required elements.",
        constraints: [
            "Maximum span: 50 meters",
            "Must use recycled materials",
            "Budget: $500,000"
        ],
        aiSuggestion: "Consider using recycled steel with a cable-stayed design to minimize material usage while maintaining structural integrity. AI analysis suggests this could reduce material costs by 35%.",
        availableElements: [
            engineeringElements[0], // Recycled Steel
            engineeringElements[2], // Smart Sensors
            engineeringElements[4], // Rainwater System
        ],
        requiredCategories: ['material', 'technology']
    },
    {
        id: 2,
        title: "Smart Building Layout",
        description: "Create an intelligent building design by combining smart elements.",
        constraints: [
            "Area: 1000 sq meters",
            "Support 100 employees",
            "Maximize natural light"
        ],
        aiSuggestion: "Based on foot traffic analysis, AI recommends dynamic workspaces with 60% hot-desking and 40% dedicated spaces, potentially increasing space efficiency by 45%.",
        availableElements: [
            engineeringElements[1], // Solar Panels
            engineeringElements[2], // Smart Sensors
            engineeringElements[3], // Green Roof
            engineeringElements[5], // AI Controller
        ],
        requiredCategories: ['energy', 'technology']
    },
    {
        id: 3,
        title: "Urban Water Management",
        description: "Design a smart stormwater system using the available components.",
        constraints: [
            "Handle 100-year flood",
            "Real-time monitoring",
            "Zero environmental impact"
        ],
        aiSuggestion: "AI weather pattern analysis suggests implementing IoT-enabled retention basins with dynamic capacity adjustment, potentially reducing flood risks by 75%.",
        availableElements: [
            engineeringElements[2], // Smart Sensors
            engineeringElements[3], // Green Roof
            engineeringElements[4], // Rainwater System
            engineeringElements[5], // AI Controller
        ],
        requiredCategories: ['water', 'technology']
    }
];

export default function DesignChallenge() {
    const [currentChallenge, setCurrentChallenge] = useState<Challenge>(challenges[0]);
    const [showAI, setShowAI] = useState(false);
    const [feedback, setFeedback] = useState('');
    const [selectedElements, setSelectedElements] = useState<EngineeringElement[]>([]);

    const handleDragStart = (e: React.DragEvent, element: EngineeringElement) => {
        e.dataTransfer.setData('application/json', JSON.stringify(element));
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const element = JSON.parse(e.dataTransfer.getData('application/json')) as EngineeringElement;
        if (!selectedElements.find(el => el.id === element.id)) {
            setSelectedElements([...selectedElements, element]);
        }
    };

    const removeElement = (elementId: string) => {
        setSelectedElements(selectedElements.filter(el => el.id !== elementId));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const hasRequiredCategories = currentChallenge.requiredCategories.every(category =>
            selectedElements.some(element => element.category === category)
        );

        if (!hasRequiredCategories) {
            setFeedback(`Please include elements from all required categories: ${currentChallenge.requiredCategories.join(', ')}`);
            setShowAI(false);
            return;
        }

        setFeedback('Great solution! The AI suggests: ' + currentChallenge.aiSuggestion);
        setShowAI(true);
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                Engineer + AI Design Challenge
            </h2>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex justify-between mb-6">
                    {challenges.map((challenge) => (
                        <button
                            key={challenge.id}
                            onClick={() => {
                                setCurrentChallenge(challenge);
                                setShowAI(false);
                                setSelectedElements([]);
                                setFeedback('');
                            }}
                            className={`px-4 py-2 rounded-md transition-colors ${
                                currentChallenge.id === challenge.id
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                            }`}
                        >
                            Challenge {challenge.id}
                        </button>
                    ))}
                </div>

                <div className="mb-6">
                    <h3 className="text-2xl font-bold text-blue-600 mb-3">{currentChallenge.title}</h3>
                    <p className="text-gray-700 mb-4">{currentChallenge.description}</p>
                    
                    <div className="bg-gray-50 p-4 rounded-md mb-6">
                        <h4 className="font-semibold text-gray-700 mb-2">Constraints:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                            {currentChallenge.constraints.map((constraint, index) => (
                                <li key={index}>{constraint}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Available Elements */}
                <div className="mb-8">
                    <h4 className="font-semibold text-gray-700 mb-4">Available Elements:</h4>
                    <div className="flex flex-wrap gap-4">
                        {currentChallenge.availableElements.map((element) => (
                            <div
                                key={element.id}
                                draggable
                                onDragStart={(e) => handleDragStart(e, element)}
                                className="bg-blue-50 p-3 rounded-md cursor-move hover:bg-blue-100 transition-colors flex items-center gap-2"
                            >
                                <span className="text-2xl">{element.icon}</span>
                                <div>
                                    <p className="font-medium text-blue-800">{element.name}</p>
                                    <p className="text-sm text-blue-600">{element.category}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Drop Zone */}
                <div
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    className="border-2 border-dashed border-gray-300 rounded-lg p-6 mb-6 min-h-[200px] hover:border-blue-500 transition-colors"
                >
                    <h4 className="font-semibold text-gray-700 mb-4">Your Solution (Drop elements here):</h4>
                    <div className="flex flex-wrap gap-4">
                        {selectedElements.map((element) => (
                            <div
                                key={element.id}
                                className="bg-green-50 p-3 rounded-md flex items-center gap-2 group"
                            >
                                <span className="text-2xl">{element.icon}</span>
                                <div>
                                    <p className="font-medium text-green-800">{element.name}</p>
                                    <p className="text-sm text-green-600">{element.description}</p>
                                </div>
                                <button
                                    onClick={() => removeElement(element.id)}
                                    className="ml-2 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                        {selectedElements.length === 0 && (
                            <p className="text-gray-500 text-center w-full">Drag and drop engineering elements here to build your solution</p>
                        )}
                    </div>
                </div>

                <button
                    onClick={handleSubmit}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                >
                    Submit Solution & Get AI Input
                </button>

                {feedback && (
                    <div className={`mt-6 p-4 rounded-md ${showAI ? 'bg-green-50' : 'bg-yellow-50'}`}>
                        <p className={`${showAI ? 'text-green-700' : 'text-yellow-700'}`}>
                            {feedback}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
} 