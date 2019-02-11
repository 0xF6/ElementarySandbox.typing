/// <reference path="./../CoreModule/index.d.ts" />
declare global
{
    interface ContactFilter2D {
        useTriggers: boolean;
        useLayerMask: boolean;
        useDepth: boolean;
        useOutsideDepth: boolean;
        useNormalAngle: boolean;
        useOutsideNormalAngle: boolean;
        layerMask: LayerMask;
        minDepth: float;
        maxDepth: float;
        minNormalAngle: float;
        maxNormalAngle: float;
        NormalAngleUpperLimit: float;
        isFiltering: boolean;
        NoFilter(): ContactFilter2D;
        ClearLayerMask(): void;
        SetLayerMask(layerMask: LayerMask): void;
        ClearDepth(): void;
        SetDepth(minDepth: float, maxDepth: float): void;
        ClearNormalAngle(): void;
        SetNormalAngle(minNormalAngle: float, maxNormalAngle: float): void;
        IsFilteringTrigger(collider: Collider2D): boolean;
        IsFilteringLayerMask(obj: UGameObject): boolean;
        IsFilteringDepth(obj: UGameObject): boolean;
        IsFilteringNormalAngle(normal: UVector2D): boolean;
        IsFilteringNormalAngle(angle: float): boolean;
    }
    interface ColliderDistance2D {
        pointA: UVector2D;
        pointB: UVector2D;
        normal: UVector2D;
        distance: float;
        isOverlapped: boolean;
        isValid: boolean;
    }
    interface Collider2D extends UBehaviour {
        density: float;
        isTrigger: boolean;
        usedByEffector: boolean;
        usedByComposite: boolean;
        offset: UVector2D;
        attachedRigidbody: Rigidbody2D;
        shapeCount: int;
        bounds: Bounds;
        sharedMaterial: PhysicsMaterial2D;
        friction: float;
        bounciness: float;
        IsTouching(collider: Collider2D): boolean;
        IsTouching(collider: Collider2D, contactFilter: ContactFilter2D): boolean;
        IsTouching(contactFilter: ContactFilter2D): boolean;
        IsTouchingLayers(): boolean;
        IsTouchingLayers(layerMask: int): boolean;
        OverlapPoint(point: UVector2D): boolean;
        Distance(collider: Collider2D): ColliderDistance2D;
        OverlapCollider(contactFilter: ContactFilter2D, results: Collider2D[]): int;
        GetContacts(contacts: ContactPoint2D[]): int;
        GetContacts(contactFilter: ContactFilter2D, contacts: ContactPoint2D[]): int;
        GetContacts(colliders: Collider2D[]): int;
        GetContacts(contactFilter: ContactFilter2D, colliders: Collider2D[]): int;
    }
    interface Ray {
        origin: UVector3D;
        direction: UVector3D;
        GetPoint(distance: float): UVector3D;
        ToString(): string;
        ToString(format: string): string;
    }
    
    interface Bounds {
        center: UVector3D;
        size: UVector3D;
        extents: UVector3D;
        min: UVector3D;
        max: UVector3D;
        GetHashCode(): int;
        Equals(other: any): boolean;
        Equals(other: Bounds): boolean;
        op_Equality(lhs: Bounds, rhs: Bounds): boolean;
        op_Inequality(lhs: Bounds, rhs: Bounds): boolean;
        SetMinMax(min: UVector3D, max: UVector3D): void;
        Encapsulate(point: UVector3D): void;
        Encapsulate(bounds: Bounds): void;
        Expand(amount: float): void;
        Expand(amount: UVector3D): void;
        Intersects(bounds: Bounds): boolean;
        IntersectRay(ray: Ray): boolean;
        IntersectRay(ray: Ray, distance: float): boolean;
        ToString(): string;
        ToString(format: string): string;
        Contains(point: UVector3D): boolean;
        SqrDistance(point: UVector3D): float;
        ClosestPoint(point: UVector3D): UVector3D;
    }
    
    interface ContactPoint2D {
        point: UVector2D;
        normal: UVector2D;
        separation: float;
        normalImpulse: float;
        tangentImpulse: float;
        relativeVelocity: UVector2D;
        collider: Collider2D;
        otherCollider: Collider2D;
        rigidbody: Rigidbody2D;
        otherRigidbody: Rigidbody2D;
        enabled: boolean;
    }
    interface RaycastHit2D {
        centroid: UVector2D;
        point: UVector2D;
        normal: UVector2D;
        distance: float;
        fraction: float;
        collider: Collider2D;
        rigidbody: Rigidbody2D;
        transform: UTransform;
        CompareTo(other: RaycastHit2D): int;
    }
    interface PhysicsMaterial2D extends UObject {
        bounciness: float;
        friction: float;
    }

    interface Rigidbody2D extends UComponent {
        position: UVector2D;
        rotation: float;
        velocity: UVector2D;
        angularVelocity: float;
        useAutoMass: boolean;
        mass: float;
        sharedMaterial: PhysicsMaterial2D;
        centerOfMass: UVector2D;
        worldCenterOfMass: UVector2D;
        inertia: float;
        drag: float;
        angularDrag: float;
        gravityScale: float;
        bodyType: RigidbodyType2D;
        useFullKinematicContacts: boolean;
        isKinematic: boolean;
        fixedAngle: boolean;
        freezeRotation: boolean;
        constraints: RigidbodyConstraints2D;
        simulated: boolean;
        interpolation: RigidbodyInterpolation2D;
        sleepMode: RigidbodySleepMode2D;
        collisionDetectionMode: CollisionDetectionMode2D;
        attachedColliderCount: int;
        MovePosition(position: UVector2D): void;
        MoveRotation(angle: float): void;
        IsSleeping(): boolean;
        IsAwake(): boolean;
        Sleep(): void;
        WakeUp(): void;
        IsTouching(collider: Collider2D): boolean;
        IsTouching(collider: Collider2D, contactFilter: ContactFilter2D): boolean;
        IsTouching(contactFilter: ContactFilter2D): boolean;
        IsTouchingLayers(): boolean;
        IsTouchingLayers(layerMask: int): boolean;
        OverlapPoint(point: UVector2D): boolean;
        Distance(collider: Collider2D): ColliderDistance2D;
        AddForce(force: UVector2D): void;
        AddForce(force: UVector2D, mode: ForceMode2D): void;
        AddRelativeForce(relativeForce: UVector2D): void;
        AddRelativeForce(relativeForce: UVector2D, mode: ForceMode2D): void;
        AddForceAtPosition(force: UVector2D, position: UVector2D): void;
        AddForceAtPosition(force: UVector2D, position: UVector2D, mode: ForceMode2D): void;
        AddTorque(torque: float): void;
        AddTorque(torque: float, mode: ForceMode2D): void;
        GetPoint(point: UVector2D): UVector2D;
        GetRelativePoint(relativePoint: UVector2D): UVector2D;
        GetVector(vector: UVector2D): UVector2D;
        GetRelativeVector(relativeVector: UVector2D): UVector2D;
        GetPointVelocity(point: UVector2D): UVector2D;
        GetRelativePointVelocity(relativePoint: UVector2D): UVector2D;
        OverlapCollider(contactFilter: ContactFilter2D, results: Collider2D[]): int;
        GetContacts(contacts: ContactPoint2D[]): int;
        GetContacts(contactFilter: ContactFilter2D, contacts: ContactPoint2D[]): int;
        GetContacts(colliders: Collider2D[]): int;
        GetContacts(contactFilter: ContactFilter2D, colliders: Collider2D[]): int;
        GetAttachedColliders(results: Collider2D[]): int;
        Cast(direction: UVector2D, results: RaycastHit2D[]): int;
        Cast(direction: UVector2D, results: RaycastHit2D[], distance: float): int;
        Cast(direction: UVector2D, contactFilter: ContactFilter2D, results: RaycastHit2D[]): int;
        Cast(direction: UVector2D, contactFilter: ContactFilter2D, results: RaycastHit2D[], distance: float): int;
    }
    enum ForceMode2D {
        Force = 0,
        Impulse = 1,
    }
    enum CollisionDetectionMode2D {
        Discrete = 0,
        Continuous = 1,
    }
    enum RigidbodySleepMode2D {
        NeverSleep = 0,
        StartAwake = 1,
        StartAsleep = 2,
    }
    enum RigidbodyInterpolation2D {
        None = 0,
        Interpolate = 1,
        Extrapolate = 2,
    }
    enum RigidbodyConstraints2D {
        None = 0,
        FreezePositionX = 1,
        FreezePositionY = 2,
        FreezePosition = 3,
        FreezeRotation = 4,
        FreezeAll = 7,
    }
    enum RigidbodyType2D {
        Dynamic = 0,
        Kinematic = 1,
        Static = 2,
    }
}
export {}