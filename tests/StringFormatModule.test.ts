import { Application } from '@wildebeest/js-modules';
import { StringFormatModule, PascalCaseFormater } from '../src';

let app: Application = new Application();
app.run([StringFormatModule]);

test("register services", () => {
    expect(app.getContainer().getNamed("StringFormater", "pascalCase")).toBeInstanceOf(PascalCaseFormater);
})