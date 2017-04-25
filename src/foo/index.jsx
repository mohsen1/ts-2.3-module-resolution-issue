import Bar, {other} from 'bar';

export default class Foo {
    render() {
        return <div title={other}>
            <Bar />
        </div>;
    }
}
