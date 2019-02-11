declare global 
{
    interface Quark
    {
        Name: string;
        Symbol: string;
        Type: QuarkType;
        EChange: ElectricChange;
        Mass: Energy;
        IsAnti(): boolean;
        ToString(): string;
    }
    interface ElectricChange
    {
        Unit: string;
        IsPositive: boolean;
        Value: string;
    }
    enum QuarkType
    {
        Unk = 0,
        d = 1,
        u = 2,
        s = 3,
        c = 4,
        b = 5,
        t = 6,
    }

    interface Energy
    {
        readonly Joule: IUnit<Energy>;
        readonly NanoJoule: IUnit<Energy>;
        readonly MicroJoule: IUnit<Energy>;
        readonly MilliJoule: IUnit<Energy>;
        readonly CentiJoule: IUnit<Energy>;
        readonly DeciJoule: IUnit<Energy>;
        readonly DekaJoule: IUnit<Energy>;
        readonly HectoJoule: IUnit<Energy>;
        readonly KiloJoule: IUnit<Energy>;
        readonly MegaJoule: IUnit<Energy>;
        readonly GigaJoule: IUnit<Energy>;
        readonly ElectronVolt: IUnit<Energy>;
        readonly KiloElectronVolt: IUnit<Energy>;
        readonly MegaElectronVolt: IUnit<Energy>;
        readonly GigaElectronVolt: IUnit<Energy>;
        readonly TeraElectronVolt: IUnit<Energy>;
        DisplayName: string;
        StandardUnit: IUnit<Energy>;
        Amount: float;
        StandardAmount: float;
        Unit: IUnit<Energy>;
        Item: IMeasure<Energy>;
        Zero: Energy;
        Epsilon: Energy;
    }
    interface IUnit<Q>
    {
        IsStandardUnit: boolean;
        Symbol :string;
        DisplayName :string;
        ConvertAmountToStandardUnit(amount: float): float;
        ConvertStandardAmountToUnit(standardAmount: float);
    }
    interface IMeasure<Q>
    {
        Unit: IUnit<Q>;
        GetAmount(unit: IUnit<Q>): float;
    }
}
export {}