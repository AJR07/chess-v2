export default class Pair<First, Second> {
    first: First;
    second: Second;

    constructor(first: First, second: Second) {
        this.first = first;
        this.second = second;
    }

    private toString(): string {
        return `(${this.first}, ${this.second})`;
    }

    equals(other: Pair<First, Second>): boolean {
        return other.first === this.first && other.second === this.second;
    }
}
