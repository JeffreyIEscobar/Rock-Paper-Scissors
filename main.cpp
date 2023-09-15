#include <iostream>
#include <ctime>
#include <cstdlib>

using namespace std;

int main() {
    srand(time(0)); // Seed the random number generator

    int userChoice, computerChoice;

    cout << "Welcome to Rock, Paper, Scissors!" << endl;

    // Display options
    cout << "Options:" << endl;
    cout << "1. Rock" << endl;
    cout << "2. Paper" << endl;
    cout << "3. Scissors" << endl;

    cout << "Enter your choice (1, 2, or 3): ";
    cin >> userChoice;

    // Validate user input
    if (userChoice < 1 || userChoice > 3) {
        cout << "Invalid choice. Please enter 1, 2, or 3." << endl;
        return 1; // Exit with an error code
    }

    // Generate a random computer choice (1 for Rock, 2 for Paper, 3 for Scissors)
    computerChoice = rand() % 3 + 1;

    cout << "Computer chose: ";
    switch (computerChoice) {
        case 1:
            cout << "Rock" << endl;
            break;
        case 2:
            cout << "Paper" << endl;
            break;
        case 3:
            cout << "Scissors" << endl;
            break;
    }

    // Determine the winner
    if (userChoice == computerChoice) {
        cout << "It's a tie!" << endl;
    } else if ((userChoice == 1 && computerChoice == 3) || (userChoice == 2 && computerChoice == 1) || (userChoice == 3 && computerChoice == 2)) {
        cout << "You win!" << endl;
    } else {
        cout << "Computer wins!" << endl;
    }

    return 0; // Exit successfully
}
