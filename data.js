const ICON_SETS = {
    'Strength': [
        'assets/exercises/strength1.png',
        'assets/exercises/strength2.png',
        'assets/exercises/strength3.png',
        'assets/exercises/strength4.png'
    ],
    'Mobility': [
        'assets/exercises/mobility1.png',
        'assets/exercises/mobility2.png',
        'assets/exercises/mobility3.png',
        'assets/exercises/mobility4.png',
        'assets/exercises/mobility5.png'

    ],
    'Stretch': [
        'assets/exercises/stretch1.png',
        'assets/exercises/stretch2.png',
        'assets/exercises/stretch3.png'

    ],
    'Animal': [
        'assets/exercises/animal_1.png'
    ],
    'Misc': [
        'assets/exercises/misc1.png',
        'assets/exercises/misc3.png',
        'assets/exercises/misc2.png'
    ]
};

// Helper to get an icon URL safely
function getIconUrl(category, index) {
    // Fallback to Strength if category doesn't exist
    const set = ICON_SETS[category] || ICON_SETS['Strength'];
    if (!set || set.length === 0) return 'assets/exercises/placeholder.png';
    
    // Use modulo to loop around if index is higher than array length
    return set[index % set.length];
}