declare global
{

    /**
     * Input Manager
     */
    var input: UInput;
    /**
     * TimeManager
     */
    var time: UTime;

    /**
     * Random Class
     */
    var Random: URandom;

    type FullScreenMode = "ExclusiveFullScreen" | "FullScreenWindow" | "MaximizedWindow" | "windowed";
    type NetworkReachability = "NotReachable" | "ReachableViaCarrierDataNetwork" | "ReachableViaLocalAreaNetwork";
    type LoadSceneMode = "Single" | "Additive";
    type PrimitiveType = "Sphere" | "Capsule" | "Cylinder" | "Cube" | "Plane" | "Quad";
    type SendMessageOptions = "RequireReceiver" | "DontRequireReceiver";
    /**
     * Base class for all entities in Unity Scenes.
     */
    interface UGameObject extends UObject
    {
        /**
         * The tag of this game object.
         */
        tag: string;
        /**
         * The Transform attached to this GameObject.
         */
        readonly transform: UTransform;
        /**
         * The layer the game object is in.
         */
        layer: i32;
        /**
         * Returns the component with name type if the game object has one attached, null if it doesn't.
         * @param type The type of Component to retrieve.
         */
        GetComponent<T>(type: string) : T

        /**
         * Returns one active GameObject tagged tag. Returns undefined if no GameObject was found.
         * @param tag The tag to search for.
         */
        FindWithTag(tag: string): UGameObject;
        /**
         * Calls the method named methodName on every MonoBehaviour in this game object
         * @param name Name of the method to call.
         * @param obj Optional parameter for the method.
         */
        SendMessage(name: string, obj?: object, opt?: SendMessageOptions);
        /**
         * Activates/Deactivates the GameObject.
         */
        SetActive(b: boolean);
        /**
         * Add component to object
         * @param t Type of object
         */
        AddComponent(t: Type): UComponent;
    }
    interface LayerMask {
        value: i32;
        LayerToName(layer: i32): string;
        NameToLayer(layerName: string): i32;
        GetMask(layerNames: string[]): i32;
    }


    interface QualitySettings extends UObject
    {
        currentLevel: QualityLevel;
        pixelLightCount: i32;
        shadows: ShadowQuality;
        shadowProjection: ShadowProjection;
        shadowCascades: i32;
        shadowDistance: f32;
        shadowResolution: ShadowResolution;
        shadowmaskMode: ShadowmaskMode;
        shadowNearPlaneOffset: f32;
        shadowCascade2Split: f32;
        shadowCascade4Split: UVector3D;
        lodBias: f32;
        anisotropicFiltering: AnisotropicFiltering;
        masterTextureLimit: i32;
        maximumLODLevel: i32;
        particleRaycastBudget: i32;
        softParticles: boolean;
        softVegetation: boolean;
        vSyncCount: i32;
        antiAliasing: i32;
        asyncUploadTimeSlice: i32;
        asyncUploadBufferSize: i32;
        asyncUploadPersistentBuffer: boolean;
        realtimeReflectionProbes: boolean;
        billboardsFaceCameraPosition: boolean;
        resolutionScalingFixedDPIFactor: f32;
        blendWeights: BlendWeights;
        streamingMipmapsActive: boolean;
        streamingMipmapsMemoryBudget: f32;
        streamingMipmapsRenderersPerFrame: i32;
        streamingMipmapsMaxLevelReduction: i32;
        streamingMipmapsAddAllCameras: boolean;
        streamingMipmapsMaxFileIORequests: i32;
        maxQueuedFrames: i32;
        names: string[];
        desiredColorSpace: ColorSpace;
        activeColorSpace: ColorSpace;
        IncreaseLevel(applyExpensiveChanges: boolean): void;
        DecreaseLevel(applyExpensiveChanges: boolean): void;
        SetQualityLevel(index: i32): void;
        IncreaseLevel(): void;
        DecreaseLevel(): void;
        GetQualityLevel(): i32;
        SetQualityLevel(index: i32, applyExpensiveChanges: boolean): void;
    }
    enum ColorSpace
    {
        Gamma = 0,
        Linear = 1,
        Uninitialized = -1,
    }
    enum BlendWeights
    {
        OneBone = 1,
        TwoBones = 2,
        FourBones = 4,
    }
    enum AnisotropicFiltering
    {
        Disable = 0,
        Enable = 1,
        ForceEnable = 2,
    }
    enum ShadowmaskMode
    {
        Shadowmask = 0,
        DistanceShadowmask = 1,
    }
    enum ShadowResolution
    {
        Low = 0,
        Medium = 1,
        High = 2,
        VeryHigh = 3,
    }
    enum ShadowProjection
    {
        CloseFit = 0,
        StableFit = 1,
    }
    enum ShadowQuality
    {
        Disable = 0,
        HardOnly = 1,
        All = 2,
    }
    enum QualityLevel
    {
        Fastest = 0,
        Fast = 1,
        Simple = 2,
        Good = 3,
        Beautiful = 4,
        Fantastic = 5,
    }

    interface Renderer extends UComponent {
        lightProbeAnchor: UTransform;
        castShadows: boolean;
        motionVectors: boolean;
        useLightProbes: boolean;
        bounds: Bounds;
        enabled: boolean;
        isVisible: boolean;
        shadowCastingMode: ShadowCastingMode;
        receiveShadows: boolean;
        motionVectorGenerationMode: MotionVectorGenerationMode;
        lightProbeUsage: LightProbeUsage;
        reflectionProbeUsage: ReflectionProbeUsage;
        renderingLayerMask: i32;
        rendererPriority: i32;
        sortingLayerName: string;
        sortingLayerID: i32;
        sortingOrder: i32;
        allowOcclusionWhenDynamic: boolean;
        isPartOfStaticBatch: boolean;
        lightProbeProxyVolumeOverride: UGameObject;
        probeAnchor: UTransform;
        lightmapIndex: i32;
        realtimeLightmapIndex: i32;
        HasPropertyBlock(): boolean;
    }
    interface AudioClip extends UObject {
        /**
         * The length of the audio clip in seconds. (Read Only)
         */
        readonly length: f32;
    
        /**
         * The length of the audio clip in samples. (Read Only)
         */
        readonly samples: i32;
        /**
         * The number of channels in the audio clip. (Read Only)
         */
        readonly channels: i32;
        /**
         * The sample frequency of the clip in Hertz. (Read Only)
         */
        readonly frequency: i32;
        /**
         * Returns true if this audio clip is ambisonic (read-only).
         */
        readonly ambisonic: boolean;
        /**
         * Corresponding to the "Load In Background" flag in the inspector, 
         * when this flag is set, the loading will happen delayed without blocking the main thread.
         */
        loadInBackground: boolean;
        /**
         * The load type of the clip (read-only).
         */
        readonly loadType: AudioClipLoadType;
        /**
         * Loads the audio data of a clip. 
         * Clips that have "Preload Audio Data" set will load the audio data automatically.
         */
        LoadAudioData(): boolean;
        /**
         * Unloads the audio data associated with the clip. 
         * This works only for AudioClips that are based on actual sound file assets.
         */
        UnloadAudioData(): boolean;
        /**
         * Returns the current load state of the audio data associated with an AudioClip.
         */
        loadState: AudioDataLoadState;
    }
    
    interface UBehaviour extends UComponent {
        /**
         * Enabled Behaviours are Updated, disabled Behaviours are not.
         */
        enabled: boolean;
        /**
         * Has the Behaviour had active and enabled called?
         */
        isActiveAndEnabled: boolean;
    }
    interface YieldInstruction { }
    interface Coroutine extends YieldInstruction { }


    interface RectTransform extends UTransform
    {
        anchorMin: Vector2D;
        anchorMax: Vector2D;
        anchoredPosition: Vector2D;
        sizeDelta: Vector2D;
        pivot: Vector2D;
        anchoredPosition3D: UVector3D;
        offsetMin: Vector2D;
        offsetMax: Vector2D;
        ForceUpdateRectTransforms(): void;
        GetLocalCorners(fourCornersArray: UVector3D[]): void;
        GetWorldCorners(fourCornersArray: UVector3D[]): void;
    }

    interface Sprite extends UObject
    {
        bounds: Bounds;
        pixelsPerUnit: f32;
        pivot: Vector2D;
        packed: boolean;
        textureRectOffset: Vector2D;
        vertices: Vector2D[];
        uv: Vector2D[];
        GetPhysicsShapeCount(): i32;
        GetPhysicsShapePointCount(shapeIdx: i32): i32;
    }
    interface SpriteRenderer extends Renderer
    {
        sprite: Sprite;
        drawMode: SpriteDrawMode;
        size: Vector2D;
        adaptiveModeThreshold: f32;
        tileMode: SpriteTileMode;
        color: Color;
        maskInteraction: SpriteMaskInteraction;
        flipX: boolean;
        flipY: boolean;
        spriteSortPoint: SpriteSortPoint;
    }
    
    interface MonoBehaviour extends UBehaviour {
        /**
         * Is any invoke pending on this MonoBehaviour?
         */
        IsInvoking(): boolean;
        /**
         * Invokes the method methodName in time seconds.
         */
        Invoke(name: string, t: f32);
        /**
         * Starts a coroutine named methodName.
         */
        StartCoroutine(name: string): Coroutine;
        StopCoroutine(name: string | Coroutine): Coroutine;
        StopAllCoroutines();
    }
    interface JSON {
        stringify(o: object): string;
    }
    interface Color {
        r: f32;
        b: f32;
        g: f32;
        a: f32;
    }
    interface UnityEvent {
        AddListener(x: () => void);
    }
    interface UnityEventGeneric<T> {
        AddListener(x: (x: T) => void);
    }
    interface Font extends UObject {
        fontNames: string[];
        dynamic: boolean;
        ascent: i32;
        fontSize: i32;
        lineHeight: i32;
        CreateDynamicFontFromOSFont(fontname: string, size: i32): Font;
        CreateDynamicFontFromOSFont(fontnames: string[], size: i32): Font;
        GetMaxVertsForString(str: string): i32;
        HasCharacter(c: string /* System.Char */): boolean;
        GetOSInstalledFontNames(): string[];
        RequestCharactersInTexture(characters: string, size: i32, style: FontStyle): void;
        RequestCharactersInTexture(characters: string, size: i32): void;
        RequestCharactersInTexture(characters: string): void;
    }
    interface UText {
        font: Font;
        text: string;
    }
    interface UTime 
    {
        timeSinceLevelLoad: f32;
        deltaTime: f32;
        fixedTime: f32;
        unscaledTime: f32;
        fixedUnscaledTime: f32;
        unscaledDeltaTime: f32;
        fixedUnscaledDeltaTime: f32;
        fixedDeltaTime: f32;
        maximumDeltaTime: f32;
        smoothDeltaTime: f32;
        maximumParticleDeltaTime: f32;
        timeScale: f32;
        frameCount: i32;
        renderedFrameCount: i32;
        realtimeSinceStartup: f32;
        captureFramerate: i32;
        inFixedTimeStep: boolean;
    }
    interface UCamera extends UBehaviour
    {
        /**
         * The near clipping plane distance.
         */
         nearClipPlane: f32;
        /**
         * The far clipping plane distance.
         */
         farClipPlane: f32;
        /**
         * The field of view of the camera in degrees.
         */
         fieldOfView: f32;
        /**
         * The rendering path that should be used, if possible.
         */
         renderingPath: RenderingPath;
        /**
         * The rendering path that is currently being used (Read Only).
         */
         readonly actualRenderingPath: RenderingPath;
    
    
        /**
         * Revert all camera parameters to default.
         */
         Reset(): void;
    
        /**
         * High dynamic range rendering.
         */
         allowHDR: boolean;
        /**
         * MSAA rendering.
         */
         allowMSAA: boolean;
        /**
         * Dynamic Resolution Scaling.
         */
         allowDynamicResolution: boolean;
        /**
         * Should camera rendering be forced into a RenderTexture.
         */
         forceIntoRenderTexture: boolean;
        /**
         * Camera's half-size when in orthographic mode.
         */
         orthographicSize: f32;
        /**
         * Is the camera orthographic (true) or perspective (false)?
         */
         orthographic: boolean;
        /**
         * Opaque object sorting mode.
         */
         opaqueSortMode: OpaqueSortMode;
        /**
         * Transparent object sorting mode.
         */
         transparencySortMode: TransparencySortMode;
        /**
         * Resets this Camera's transparency sort settings to the default. 
         * Default transparency settings are taken from GraphicsSettings instead of directly from this Camera.
         */
         ResetTransparencySortSettings(): void;
        /**
         * An axis that describes the direction along which the distances of 
         * objects are measured for the purpose of sorting.
         */
         transparencySortAxis: UVector3D;
        /**
         * Camera's depth in the camera rendering order.
         */
         depth: f32;
        /**
         * The aspect ratio (width divided by height).
         */
         aspect: f32;
        /**
         * Revert the aspect ratio to the screen's aspect ratio.
         */
         ResetAspect(): void;
        /**
         * This is used to render parts of the Scene selectively.
         */
         cullingMask: i32;
        /**
         * Mask to select which layers can trigger events on the camera.
         */
         eventMask: i32;
        /**
         * How to perform per-layer culling for a Camera.
         */
         layerCullSpherical: boolean;
        /**
         * Identifies what kind of camera this is.
         */
         cameraType: CameraType;
        /**
         * Per-layer culling distances.
         */
         layerCullDistances: f32[];
        /**
         * Whether or not the Camera will use occlusion culling during rendering.
         */
         useOcclusionCulling: boolean;
        /**
         * The color with which the screen will be cleared.
         */
         backgroundColor: Color;
        /**
         * How the camera clears the background.
         */
         clearFlags: CameraClearFlags;
    }
    
    interface ScriptableObject extends UObject
    {
        /**
         * Creates an instance of a scriptable object.
         * @param className The type of the ScriptableObject to create, as the name of the type.
         */
          CreateInstance(className: string): ScriptableObject;
    }
    interface Light extends UBehaviour
    {
        /**
         * The Intensity of a light is multiplied with the Light color.
         */
         intensity: f32;
    }
    
    interface URandom
    {
        seed: i32;
        Range(min: number, max: number): number;
    }
    
    interface UInput
    {
          simulateMouseWithTouches: boolean;
          anyKey: boolean;
          anyKeyDown: boolean;
          inputString: string;
          mousePosition: UVector3D;
          mouseScrollDelta: Vector2D;
          compositionString: string;
          imeIsSelected: boolean;
          compositionCursorPos: Vector2D;
          eatKeyPressOnTextFieldFocus: boolean;
          mousePresent: boolean;
          touchCount: i32;
          touchPressureSupported: boolean;
          stylusTouchSupported: boolean;
          touchSupported: boolean;
          multiTouchEnabled: boolean;
          isGyroAvailable: boolean;
          acceleration: UVector3D;
          compensateSensors: boolean;
          accelerationEventCount: i32;
          backButtonLeavesApp: boolean;
          GetAxis(axisName: string): f32;
          GetAxisRaw(axisName: string): f32;
          GetButton(buttonName: string): boolean;
          GetButtonDown(buttonName: string): boolean;
          GetButtonUp(buttonName: string): boolean;
          GetMouseButton(button: i32): boolean;
          GetMouseButtonDown(button: i32): boolean;
          GetMouseButtonUp(button: i32): boolean;
          ResetInputAxes(): void;
          IsJoystickPreconfigured(joystickName: string): boolean;
          GetJoystickNames(): string[];
          GetKey(name: string): boolean;
          GetKeyUp(name: string): boolean;
          GetKeyDown(name: string): boolean;
    }
    interface CPU
    {
         readonly Count: i32;
         readonly Frequency: i32;
         readonly Type: string;
    }
    interface GPU
    {
         readonly ShaderLevel: i32;
         readonly MultiThreaded: boolean;
         readonly DeviceName: string;
         readonly DeviceType: GraphicsDeviceType;
         readonly MemorySize: i32;
    }
    interface SpriteRenderer extends Renderer {
        sprite: Sprite;
        drawMode: SpriteDrawMode;
        size: Vector2D;
        adaptiveModeThreshold: f32;
        tileMode: SpriteTileMode;
        color: Color;
        maskInteraction: SpriteMaskInteraction;
        flipX: boolean;
        flipY: boolean;
        spriteSortPoint: SpriteSortPoint;
    }
    interface UComponent extends UObject {
        /**
         * The tag of this game object.
         */
        tag: string;
        /**
         * The Transform attached to this GameObject.
         */
        transform: UTransform;
        /**
         * The game object this component is attached to. A component is always attached to a game object.
         */
        gameObject: UGameObject;
        /**
         * Returns the component with name type if the game object has one attached, null if it doesn't.
         * @param type The type of Component to retrieve.
         */
        GetComponent<T>(type: string): T
        /**
         * Calls the method named methodName on every MonoBehaviour in this game object
         * @param name Name of the method to call.
         * @param obj Optional parameter for the method.
         */
        SendMessage(name: string, obj?: object, opt?: SendMessageOptions);
    }
    /**
     * Base interface for all objects Unity can reference.
     */
    interface UObject {
        /**
         * @returns Returns the instance id of the object.
         */
        GetInstanceID(): number;
        /**
         * @returns The name of the object.
         */
        name: string;
    
        /** 
         * Do not destroy the target Object when loading a new Scene.
         */
        DontDestroyOnLoad(obj: UObject)
        /**
         * Destroys the object obj immediately. You are strongly recommended to use Destroy instead.
         * @param obj Object to be destroyed.
         */
        DestroyImmediate(obj: UObject);
        /**
         * Removes a gameobject, component or asset.
         * @param obj The object to destroy.
         */
        Destroy(obj: UObject);
        /**
         * Removes a gameobject, component or asset.
         * @param obj The object to destroy.
         * @param time The optional amount of time to delay before destroying the object.
         */
        Destroy(obj: UObject, time: f32);
    }
    interface UVector {
        kEpsilon: f32;
        kEpsilonNormalSqrt: f32;
    }
    interface UVector3D extends UVector {
        x: f32;
        y: f32;
        z: f32;
    }
    interface Vector2D extends UVector {
        x: f32;
        y: f32;
    }
    interface UQuaternion {
        x: f32;
        y: f32;
        z: f32;
        w: f32;
    }
    interface UTransform {
        /**
         * The world space position of the Transform.
         */
        position: UVector3D;
        /**
         * Position of the transform relative to the parent transform.
         */
        localPosition: UVector3D;
        /**
         * The rotation as Euler angles in degrees.
         */
        eulerAngles: UVector3D;
        /**
         * The rotation as Euler angles in degrees relative to the parent transform's rotation.
         */
        localEulerAngles: UVector3D;
        /**
         * The red axis of the transform in world space.
         */
        right: UVector3D;
        up: UVector3D;
        forward: UVector3D;
    
        rotation: UQuaternion;
        localRotation: UQuaternion;
    
        /**
         * The parent of the transform.
         */
        parent: UTransform;
    }
    
    //=== Enums
    
    
    enum CameraClearFlags
    {
        /**
         * Clear with the skybox.
         */
        Skybox = 1,
        /**
         * Clear with the color.
         */
        Color = 2,
        /**
         * Clear with a background color.
         */
        SolidColor = 2,
        /**
         * Clear only the depth buffer.
         */
        Depth = 3,
        /**
         * Don't clear anything.
         */
        Nothing = 4,
    }
    
    
    /**
     * Rendering path of a Camera.
     */
    enum RenderingPath
    {
        /**
         * Use Player Settings.
         */
        UsePlayerSettings = -1,
        /**
         * Vertex Lit.
         */
        VertexLit = 0,
        /**
         * Forward Rendering.
         */
        Forward = 1,
        /**
         * Deferred Lighting (Legacy).
         */
        DeferredLighting = 2,
        /**
         * Deferred Shading.
         */
        DeferredShading = 3,
    }
    /**
     * Opaque object sorting mode of a Camera.
     */
    enum OpaqueSortMode
    {
        /**
         * Default opaque sorting mode.
         */
        Default,
        /**
         * Do rough front-to-back sorting of opaque objects.
         */
        FrontToBack,
        /**
         * Do not sort opaque objects by distance.
         */
        NoDistanceSort,
    }
    /**
     * Transparent object sorting mode of a Camera.
     */
    enum TransparencySortMode
    {
        /**
         * Default transparency sorting mode.
         */
        Default,
        /**
         * Perspective transparency sorting mode.
         */
        Perspective,
        /**
         * Orthographic transparency sorting mode.
         */
        Orthographic,
        /**
         * Sort objects based on distance along a custom axis.
         */
        CustomAxis,
    }
    
    enum CameraType
    {
        /**
         * Used to indicate a regular in-game camera.
         */
        Game = 1,
        /**
         * Used to indicate that a camera is used for rendering the Scene View in the Editor.
         */
        SceneView = 2,
        /**
         * Used to indicate a camera that is used for rendering previews in the Editor.
         */
        Preview = 4,
        /**
         * Used to indicate that a camera is used for rendering VR (in edit mode) in the Editor.
         */
        VR = 8,
        /**
         * Used to indicate a camera that is used for rendering reflection probes.
         */
        Reflection = 16
    }
    enum GraphicsDeviceType
    {
        // NONE
        Null = 4,
        // Linux
        OpenGL2 = 0,
        OpenGLES2 = 8,
        OpenGLES3 = 11,
        OpenGLCore = 17,
        // MultiOS
        Vulkan = 21,
        // Windows
        Direct3D9 = 1,
        Direct3D11 = 2,
        Direct3D12 = 18,
        // Playstation
        PlayStationVita = 12,
        PlayStation4 = 13,
        PlayStation3 = 3,
        // Nintendo
        N3DS = 19,
        Switch = 22,
        // XBox and Windows Store
        Xbox360 = 6,
        XboxOne = 14,
        XboxOneD3D12 = 23,
        // MacOS
        Metal = 16,
    }
    enum FontStyle
    {
        Normal = 0,
        Bold = 1,
        Italic = 2,
        BoldAndItalic = 3,
    }
    enum AudioClipLoadType {
        /**
         * The audio data is decompressed when the audio clip is loaded.
         */
        DecompressOnLoad,
        /**
         * The audio data of the clip will be kept in memory in compressed form.
         */
        CompressedInMemory,
        /**
         * Streams audio data from disk.
         */
        Streaming
    }
    
    enum AudioDataLoadState {
        /**
         * Value returned by AudioClip.loadState for an AudioClip 
         * that has no audio data loaded and where loading has not been initiated yet.
         */
        Unloaded,
        /**
         * Value returned by AudioClip.loadState for an AudioClip that is currently loading audio data.
         */
        Loading,
        /**
         * Value returned by AudioClip.loadState for an AudioClip that has succeeded loading its audio data.
         */
        Loaded,
        /**
         * Value returned by AudioClip.loadState for an AudioClip that has failed loading its audio data.
         */
        Failed
    }
    export enum DeviceOrientation {
        Unknown = 0,
        Portrait = 1,
        PortraitUpsideDown = 2,
        LandscapeLeft = 3,
        LandscapeRight = 4,
        FaceUp = 5,
        FaceDown = 6,
    }
    export enum IMECompositionMode {
        Auto = 0,
        On = 1,
        Off = 2,
    }
    
    enum MotionVectorGenerationMode {
        Camera = 0,
        Object = 1,
        ForceNoMotion = 2,
    }
    enum ReflectionProbeUsage {
        Off = 0,
        BlendProbes = 1,
        BlendProbesAndSkybox = 2,
        Simple = 3,
    }
    enum LightProbeUsage {
        Off = 0,
        BlendProbes = 1,
        UseProxyVolume = 2,
        CustomProvided = 4,
    }
    enum ShadowCastingMode {
        Off = 0,
        On = 1,
        TwoSided = 2,
        ShadowsOnly = 3,
    }
    enum SpriteSortPoint {
        Center = 0,
        Pivot = 1,
    }
    enum SpriteMaskInteraction {
        None = 0,
        VisibleInsideMask = 1,
        VisibleOutsideMask = 2,
    }
    enum SpriteTileMode {
        Continuous = 0,
        Adaptive = 1,
    }
    enum SpriteDrawMode {
        Simple = 0,
        Sliced = 1,
        Tiled = 2,
    }
}
export {}