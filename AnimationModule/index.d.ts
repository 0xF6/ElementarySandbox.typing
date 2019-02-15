declare global
{
    interface Animator extends UBehaviour
    {
        isOptimizable: boolean;
        isHuman: boolean;
        hasRootMotion: boolean;
        humanScale: float;
        isInitialized: boolean;
        deltaPosition: UVector3D;
        deltaRotation: UQuaternion;
        velocity: UVector3D;
        angularVelocity: UVector3D;
        rootPosition: UVector3D;
        rootRotation: UQuaternion;
        applyRootMotion: boolean;
        linearVelocityBlending: boolean;
        animatePhysics: boolean;
        updateMode: AnimatorUpdateMode;
        hasTransformHierarchy: boolean;
        gravityWeight: float;
        bodyPosition: UVector3D;
        bodyRotation: UQuaternion;
        stabilizeFeet: boolean;
        layerCount: int;
        parameterCount: int;
        feetPivotActive: float;
        pivotWeight: float;
        pivotPosition: UVector3D;
        isMatchingTarget: boolean;
        speed: float;
        targetPosition: UVector3D;
        targetRotation: UQuaternion;
        cullingMode: AnimatorCullingMode;
        playbackTime: float;
        recorderStartTime: float;
        recorderStopTime: float;
        recorderMode: AnimatorRecorderMode;
        hasBoundPlayables: boolean;
        layersAffectMassCenter: boolean;
        leftFeetBottomHeight: float;
        rightFeetBottomHeight: float;
        logWarnings: boolean;
        fireEvents: boolean;
        keepAnimatorControllerStateOnDisable: boolean;
        Stop(): void;
        GetFloat(name: string): float;
        GetFloat(id: int): float;
        SetFloat(name: string, value: float): void;
        SetFloat(name: string, value: float, dampTime: float, deltaTime: float): void;
        SetFloat(id: int, value: float): void;
        SetFloat(id: int, value: float, dampTime: float, deltaTime: float): void;
        GetBool(name: string): boolean;
        GetBool(id: int): boolean;
        SetBool(name: string, value: boolean): void;
        SetBool(id: int, value: boolean): void;
        GetInteger(name: string): int;
        GetInteger(id: int): int;
        SetInteger(name: string, value: int): void;
        SetInteger(id: int, value: int): void;
        SetTrigger(name: string): void;
        SetTrigger(id: int): void;
        ResetTrigger(name: string): void;
        ResetTrigger(id: int): void;
        Play(stateName: string, layer: int): void;
        Play(stateName: string): void;
        Play(stateName: string, layer: int, normalizedTime: float): void;
    }

    enum AvatarTarget
    {
        Root = 0,
        Body = 1,
        LeftFoot = 2,
        RightFoot = 3,
        LeftHand = 4,
        RightHand = 5,
    }
    enum HumanBodyBones
    {
        Hips = 0,
        LeftUpperLeg = 1,
        RightUpperLeg = 2,
        LeftLowerLeg = 3,
        RightLowerLeg = 4,
        LeftFoot = 5,
        RightFoot = 6,
        Spine = 7,
        Chest = 8,
        Neck = 9,
        Head = 10,
        LeftShoulder = 11,
        RightShoulder = 12,
        LeftUpperArm = 13,
        RightUpperArm = 14,
        LeftLowerArm = 15,
        RightLowerArm = 16,
        LeftHand = 17,
        RightHand = 18,
        LeftToes = 19,
        RightToes = 20,
        LeftEye = 21,
        RightEye = 22,
        Jaw = 23,
        LeftThumbProximal = 24,
        LeftThumbIntermediate = 25,
        LeftThumbDistal = 26,
        LeftIndexProximal = 27,
        LeftIndexIntermediate = 28,
        LeftIndexDistal = 29,
        LeftMiddleProximal = 30,
        LeftMiddleIntermediate = 31,
        LeftMiddleDistal = 32,
        LeftRingProximal = 33,
        LeftRingIntermediate = 34,
        LeftRingDistal = 35,
        LeftLittleProximal = 36,
        LeftLittleIntermediate = 37,
        LeftLittleDistal = 38,
        RightThumbProximal = 39,
        RightThumbIntermediate = 40,
        RightThumbDistal = 41,
        RightIndexProximal = 42,
        RightIndexIntermediate = 43,
        RightIndexDistal = 44,
        RightMiddleProximal = 45,
        RightMiddleIntermediate = 46,
        RightMiddleDistal = 47,
        RightRingProximal = 48,
        RightRingIntermediate = 49,
        RightRingDistal = 50,
        RightLittleProximal = 51,
        RightLittleIntermediate = 52,
        RightLittleDistal = 53,
        UpperChest = 54,
        LastBone = 55,
    }
    enum AvatarIKHint
    {
        LeftKnee = 0,
        RightKnee = 1,
        LeftElbow = 2,
        RightElbow = 3,
    }
    enum AvatarIKGoal
    {
        LeftFoot = 0,
        RightFoot = 1,
        LeftHand = 2,
        RightHand = 3,
    }
    enum AnimatorRecorderMode
    {
        Offline = 0,
        Playback = 1,
        Record = 2,
    }
    enum AnimatorCullingMode
    {
        AlwaysAnimate = 0,
        CullUpdateTransforms = 1,
        CullCompletely = 2,
    }
    enum AnimatorUpdateMode
    {
        Normal = 0,
        AnimatePhysics = 1,
        UnscaledTime = 2,
    }
}
export {}
