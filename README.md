# minesweeper
[Deploy](https://crystal-twinkle.github.io/minesweeper/minesweeper/)

### Tech stack:
- the default size of the frame is 10x10 with 10 mines.
- the game starts after user makes first click using left button on mouse
- the player should be able to click on cells to reveal them. If the cell contains a mine, the game is over. If the cell does not contain a mine, the number of mines in the surrounding cells should be displayed
- the game should end when the player reveals all cells that do not contain mines (win) or clicks on mine (lose). On a successful game solution, display the following messages: in case of win - "Hooray! You found all mines in ## seconds and N moves!" and in case of lose - "Game over. Try again"

- mines are placed after the first move, so that user cannot lose the game on the first move. It means that during the first move, the user can either open one cell with a number or empty cells and the nearest cells with numbers if this item in the specifications is implemented.
- the player should be able to add flag on cells clicking on right mouse button to indicate that they suspect a mine is present
- the game should use color coding (using numbers and colors) to indicate the number of mines surrounding a revealed cell. As the result there will be 8 different colors for 8 numbers from 1 to 8
- the game can be restarted without reloading the page (for example, by clicking on button New game or clicking on Emoji smile like in original game)
- display the game duration seconds and the number of unused flags
when user opens a square that does not touch any mines, it will be empty and the adjacent squares will automatically open in all directions until reaching squares that contain numbers
- if flags were already placed on the cells that will be automatically opened during this move, flags will be removed, and the cells underneath them will be opened if they are empty or are the closest cells with numbers.

Additional:
- the game should include sound effects for events such as revealing a cell, flagging a cell, and game over (win and lose).
- the player should be able to select a difficulty level (easy, medium, hard) which changes the size of the game board and the number of mines
- the latest 10 win results are saved in the high score table. Sorting is no obligatory
- implement the functionality to save the game (for example, using localStorage), so that when player clicks on button "continue last game", he can continue playing from where he left off
- dark/light themes of the game.
