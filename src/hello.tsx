import * as React from 'react';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

const getExclamationMarks =(numChars: number) => {
    return Array(numChars + 1).join('!');
}

function Hello({ name, enthusiasmLevel = 1 }: Props) {
    if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
        <div className='hello'>
            <div className='bg-purple-500 font-bold m-6'>
                Hello {name + getExclamationMarks(enthusiasmLevel)}
            </div>
        </div>
    );
}

export default Hello;
