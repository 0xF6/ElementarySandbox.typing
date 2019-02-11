/// <reference path="./../CoreModule/index.d.ts" />
interface DepthOfField extends PostProcessEffectSettings
{
    /**
     * The distance to the point of focus.
     */
     focusDistance: FloatParameter;
    /**
     * The ratio of the aperture (known as f-stop or f-number). The smaller the value is, the
     * shallower the depth of field is.
     */
     aperture: FloatParameter;
    /**
     * The distance between the lens and the film. The larger the value is, the shallower the
     * depth of field is.
     */
     focalLength: FloatParameter;
}


//=-------------------

interface PostProcessVolume extends MonoBehaviour
{
     sharedProfile: PostProcessProfile;
     profile: PostProcessProfile;
    /**
     * Should this volume be applied to the whole scene?
     */
     isGlobal: boolean;
    /**
     * The outer distance to start blending from. A value of 0 means no blending and the volume
     * overrides will be applied immediatly upon entry.
     */
     blendDistance: float;
    /**
     * The total weight of this volume in the scene. 0 means it won't do anything, 1 means full
     * effect.
     */
     weight: float;
    /**
     * The volume priority in the stack. Higher number means higher priority. Negative values
     * are supported.
     */
     priority: float;
}


interface UParameterOverride
{
    /**
     * The override state of this parameter.
     */
     overrideState: boolean;
}


interface ParameterOverride<T> extends UParameterOverride
{
    /**
     * The value stored in this parameter.
     */
     value: T;
    /**
     * Interpolates between two values given an interpolation factor
     * @param from The value to interpolate from
     * @param to The value to interpolate to
     * @param t An interpolation factor (generally in range <c>[0,1]</c>)
     */
     Interp(from: T, to: T, t: float): void;
}


interface BoolParameter extends ParameterOverride<boolean> {}
interface FloatParameter extends ParameterOverride<float> {
     SetValue(value: float): void; // TODO: Need fix JS Marshaling double to float
}
interface IntParameter extends ParameterOverride<int> {}
interface StringParameter extends ParameterOverride<string> {}
interface ColorParameter extends ParameterOverride<Color> {}
interface Vector2Parameter extends ParameterOverride<UVector2D> {}
interface Vector3Parameter extends ParameterOverride<UVector3D> {}



interface PostProcessEffectSettings extends ScriptableObject
{
    /**
     * The active state of the set of parameter defined in this interface.
     */
     active: boolean;
    /**
     * The true state of the effect override in the stack. Setting this to <c>false</c> will
     * disable rendering for this effect assuming a volume with a higher priority doesn't
     * override it to <c>true</c>.
     */
     enabled: BoolParameter;
}

interface PostProcessProfile extends ScriptableObject
{
    /**
     * A list of all settings stored in this profile.
     */
     settings: PostProcessEffectSettings[];
    /**
     * Adds settings for an effect to the profile.
     * @param type A type of PostProcessEffectSettings
     */
     AddSettings(type: Type | PostProcessEffectSettings): PostProcessEffectSettings;
    /**
     * Removes settings for an effect from the profile.
     * @param type The type to look for and remove from the profile
     */
     RemoveSettings(type: Type): void;
    /**
     * Checks if an effect has been added to the profile.
     * @param type The type to look for
     */
     HasSettings(type: Type): boolean;
    /**
     * Returns settings for a given effect type name.
     */
     GetSetting<T>(name: string): T;
}