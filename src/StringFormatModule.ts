import { Module } from '@wildebeest/js-modules';
import { Container } from 'inversify';
import { StringFormater } from './StringFormater';
import { PascalCaseFormater } from './PascalCaseFormater';

export class StringFormatModule implements Module
{
    getDependencies(): Array<any>
    {
        return [];
    }

    register(container: Container): void
    {
        container.bind<StringFormater>("StringFormater").to(PascalCaseFormater).inSingletonScope().whenTargetNamed("pascalCase");
    }

    boot(container: Container): void {}
}