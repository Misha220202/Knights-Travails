const knightMoves = (start, end) => {

    const moves = [[1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2]];

    const isValid = ([x, y]) => x >= 0 && x < 8 && y >= 0 && y < 8;

    const bfs = (start, end) => {
        const queue = [[start]];
        const visitedNodes = new Set();
        visitedNodes.add(start.toString());

        while (queue.length) {
            const path = queue.shift();
            const [x, y] = path[path.length - 1];
            if (x == end[0] && y == end[1]) {
                return path;
            }

            moves.forEach(move => {
                const dx = move[0];
                const dy = move[1];
                const nextPosition = [x + dx, y + dy];
                if (isValid(nextPosition) && !visitedNodes.has(nextPosition.toString())) {
                    visitedNodes.add(nextPosition.toString());
                    queue.push([...path, nextPosition]);
                }
            })
        }

        return null;
    }

    const path = bfs(start, end);
    console.log(path);
    return path;
}

knightMoves([3, 3], [4, 3]);