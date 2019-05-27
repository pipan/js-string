## Template module

[![Build Status](https://travis-ci.com/pipan/js-string.svg?branch=master)](https://travis-ci.com/pipan/js-string)

Additional functions and services for manipulations with string;

## Installation

```sh
npm install --save @wildebeest/string
```

## Requirements

It's usefull to know these libraries:

* inversify
* @wildebeest/js-modules

## Format string

Transform string, for example to pascal case or cammel case, ...

### Pascal Case

Inject named binding to your class that wants to use pascal case formater and call `format()` method.

```ts
class Test {
    protected formater: StringFormater;

    constructor(@injec("StringFormater") @named("pascalCase") formater: StringFormater)
    {
        this.formater = formater;
    }

    public foo(): void
    {
        let foramterdText: string = this.formater.format("transfor to pascal case");
    }
}
```

### Add new formater

Create new class that implements StringFormater interface and add this new class to container.

```ts
class CustomFormater implements StringFormater
{
    public format(value: string): string
    {
        ...
    }
}
```

```ts
import { Module } from '@wildebeest/js-modules';
import { Contaienr } from 'inversify';

class CustomModule implements Module
{
    getDependencies(): Arra<any> { ... }

    register(container: Container): void
    {
        container.bind<CustomFormater>("StringFormater").to(CustomerFormater).inSingletonScope().whenTargetNamed('custom');
    }

    boot(container: Container): void { ... }
}
```