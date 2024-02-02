const max = 5;

function printTree() {
    let tree = '';
    let i ;
    for (i = 0; i < max; i++) {
        tree += (' '.repeat(max- 1 - i))
            + '/' + (i !== max - 1
                ? ' '.repeat(2 * i)
                : '_'.repeat(2 * i))
            + '\\' + '\n';
    }
    tree += ' '.repeat(i - 1) + '||\n';
    console.log(tree);
}

printTree();
