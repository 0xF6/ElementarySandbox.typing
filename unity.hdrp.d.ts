
///<reference path="unity.d.ts"/>



declare class DepthOfField extends PostProcessEffectSettings
{
    /**
     * The distance to the point of focus.
     */
    public focusDistance: FloatParameter;
    /**
     * The ratio of the aperture (known as f-stop or f-number). The smaller the value is, the
     * shallower the depth of field is.
     */
    public aperture: FloatParameter;
    /**
     * The distance between the lens and the film. The larger the value is, the shallower the
     * depth of field is.
     */
    public focalLength: FloatParameter;
}














//==----------------------------------- 


declare abstract class ParameterOverride
{
    /**
     * The override state of this parameter.
     */
    public overrideState: boolean;
}


declare class ParameterOverride<T> extends ParameterOverride
{
    /**
     * The value stored in this parameter.
     */
    public value: T;
    /**
     * Interpolates between two values given an interpolation factor
     * @param from The value to interpolate from
     * @param to The value to interpolate to
     * @param t An interpolation factor (generally in range <c>[0,1]</c>)
     */
    public Interp(from: T, to: T, t: float): void;
}


declare class BoolParameter extends ParameterOverride<boolean> {}
declare class FloatParameter extends ParameterOverride<float> {}
declare class IntParameter extends ParameterOverride<int> {}
declare class StringParameter extends ParameterOverride<string> {}
declare class ColorParameter extends ParameterOverride<Color> {}
declare class Vector2Parameter extends ParameterOverride<UVector2D> {}
declare class Vector3Parameter extends ParameterOverride<UVector3D> {}



declare class PostProcessEffectSettings extends ScriptableObject
{
    /**
     * The active state of the set of parameter defined in this class.
     */
    public active: boolean = true;
    /**
     * The true state of the effect override in the stack. Setting this to <c>false</c> will
     * disable rendering for this effect assuming a volume with a higher priority doesn't
     * override it to <c>true</c>.
     */
    public enabled: BoolParameter;
    /**
     * Returns <c>true</c> if the effect is currently enabled and supported.
     * @param ctx The current post-processing render context
     */
    public IsEnabledAndSupported(ctx: PostProcessRenderContext): boolean;
}

declare class PostProcessProfile extends ScriptableObject
{
    /**
     * A list of all settings stored in this profile.
     */
    public settings: PostProcessEffectSettings[];
    /**
     * Adds settings for an effect to the profile.
     * @param type A type of PostProcessEffectSettings
     */
    public AddSettings(type: Type | PostProcessEffectSettings): PostProcessEffectSettings;
    /**
     * Removes settings for an effect from the profile.
     * @param type The type to look for and remove from the profile
     */
    public RemoveSettings(type: Type): void;
    /**
     * Checks if an effect has been added to the profile.
     * @param type The type to look for
     */
    public HasSettings(type: Type): boolean;
    /**
     * Returns settings for a given effect type name.
     */
    public GetSetting(name: string): PostProcessEffectSettings & DepthOfField;
}