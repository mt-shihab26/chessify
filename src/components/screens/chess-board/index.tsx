import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const initialBoard = [
    ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
    ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
    ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'],
];

const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const ranks = ['8', '7', '6', '5', '4', '3', '2', '1'];

export function ChessBoard() {
    const isLightSquare = (row: number, col: number) => (row + col) % 2 === 0;

    return (
        <div className="flex flex-col items-center gap-6 p-8">
            <div className="space-y-2 text-center">
                <h1 className="text-4xl font-bold tracking-tight">Chessify</h1>
                <p className="text-muted-foreground">Interactive Chess Board</p>
            </div>

            <Card className="w-fit">
                <CardHeader className="pb-4 text-center">
                    <CardTitle className="text-xl">Game Board</CardTitle>
                    <div className="flex justify-center gap-2">
                        <Badge variant="outline">White to move</Badge>
                        <Badge variant="secondary">Turn 1</Badge>
                    </div>
                </CardHeader>

                <Separator />

                <CardContent className="p-6">
                    <div className="relative">
                        {/* Rank labels (left side) */}
                        <div className="absolute top-0 -left-8 flex h-full flex-col">
                            {ranks.map((rank) => (
                                <div
                                    key={rank}
                                    className="text-muted-foreground flex h-12 items-center justify-center text-sm font-medium"
                                >
                                    {rank}
                                </div>
                            ))}
                        </div>

                        {/* File labels (bottom) */}
                        <div className="absolute -bottom-8 left-0 flex w-full">
                            {files.map((file) => (
                                <div
                                    key={file}
                                    className="text-muted-foreground flex w-12 items-center justify-center text-sm font-medium"
                                >
                                    {file}
                                </div>
                            ))}
                        </div>

                        {/* Chess board using Button components */}
                        <div className="border-border grid grid-cols-8 gap-0 overflow-hidden rounded-md border-2">
                            {initialBoard.map((row, rowIndex) =>
                                row.map((piece, colIndex) => (
                                    <Button
                                        key={`${rowIndex}-${colIndex}`}
                                        variant="ghost"
                                        size="sm"
                                        className={`h-12 w-12 rounded-none p-0 text-2xl font-normal transition-transform hover:scale-105 ${
                                            isLightSquare(rowIndex, colIndex)
                                                ? 'bg-background hover:bg-muted text-foreground'
                                                : 'bg-foreground hover:bg-foreground/90 text-background'
                                        } `}
                                        onClick={() =>
                                            console.log(
                                                `Clicked ${files[colIndex]}${ranks[rowIndex]}`,
                                            )
                                        }
                                    >
                                        {piece}
                                    </Button>
                                )),
                            )}
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-lg">Game Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">White Pieces:</span>
                        <Badge variant="outline">♔♕♖♗♘♙</Badge>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Black Pieces:</span>
                        <Badge variant="outline">♚♛♜♝♞♟</Badge>
                    </div>
                    <Separator />
                    <div className="text-center">
                        <Button variant="outline" size="sm" className="w-full">
                            New Game
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
