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
        minDepth: f32;
        maxDepth: f32;
        minNormalAngle: f32;
        maxNormalAngle: f32;
        NormalAngleUpperLimit: f32;
        isFiltering: boolean;
        NoFilter(): ContactFilter2D;
        ClearLayerMask(): void;
        SetLayerMask(layerMask: LayerMask): void;
        ClearDepth(): void;
        SetDepth(minDepth: f32, maxDepth: f32): void;
        ClearNormalAngle(): void;
        SetNormalAngle(minNormalAngle: f32, maxNormalAngle: f32): void;
        IsFilteringTrigger(collider: Collider2D): boolean;
        IsFilteringLayerMask(obj: UGameObject): boolean;
        IsFilteringDepth(obj: UGameObject): boolean;
        IsFilteringNormalAngle(normal: Vector2D): boolean;
        IsFilteringNormalAngle(angle: f32): boolean;
    }
    interface ColliderDistance2D {
        pointA: Vector2D;
        pointB: Vector2D;
        normal: Vector2D;
        distance: f32;
        isOverlapped: boolean;
        isValid: boolean;
    }
    interface Collider2D extends UBehaviour {
        density: f32;
        isTrigger: boolean;
        usedByEffector: boolean;
        usedByComposite: boolean;
        offset: Vector2D;
        attachedRigidbody: Rigidbody2D;
        shapeCount: i32;
        bounds: Bounds;
        sharedMaterial: PhysicsMaterial2D;
        friction: f32;
        bounciness: f32;
        IsTouching(collider: Collider2D): boolean;
        IsTouching(collider: Collider2D, contactFilter: ContactFilter2D): boolean;
        IsTouching(contactFilter: ContactFilter2D): boolean;
        IsTouchingLayers(): boolean;
        IsTouchingLayers(layerMask: i32): boolean;
        OverlapPoint(point: Vector2D): boolean;
        Distance(collider: Collider2D): ColliderDistance2D;
        OverlapCollider(contactFilter: ContactFilter2D, results: Collider2D[]): i32;
        GetContacts(contacts: ContactPoint2D[]): i32;
        GetContacts(contactFilter: ContactFilter2D, contacts: ContactPoint2D[]): i32;
        GetContacts(colliders: Collider2D[]): i32;
        GetContacts(contactFilter: ContactFilter2D, colliders: Collider2D[]): i32;
    }
    interface Ray {
        origin: UVector3D;
        direction: UVector3D;
        GetPoint(distance: f32): UVector3D;
        ToString(): string;
        ToString(format: string): string;
    }
    
    interface Bounds {
        center: UVector3D;
        size: UVector3D;
        extents: UVector3D;
        min: UVector3D;
        max: UVector3D;
        GetHashCode(): i32;
        Equals(other: any): boolean;
        Equals(other: Bounds): boolean;
        op_Equality(lhs: Bounds, rhs: Bounds): boolean;
        op_Inequality(lhs: Bounds, rhs: Bounds): boolean;
        SetMinMax(min: UVector3D, max: UVector3D): void;
        Encapsulate(point: UVector3D): void;
        Encapsulate(bounds: Bounds): void;
        Expand(amount: f32): void;
        Expand(amount: UVector3D): void;
        Intersects(bounds: Bounds): boolean;
        IntersectRay(ray: Ray): boolean;
        IntersectRay(ray: Ray, distance: f32): boolean;
        ToString(): string;
        ToString(format: string): string;
        Contains(point: UVector3D): boolean;
        SqrDistance(point: UVector3D): f32;
        ClosestPoint(point: UVector3D): UVector3D;
    }
    
    interface ContactPoint2D {
        point: Vector2D;
        normal: Vector2D;
        separation: f32;
        normalImpulse: f32;
        tangentImpulse: f32;
        relativeVelocity: Vector2D;
        collider: Collider2D;
        otherCollider: Collider2D;
        rigidbody: Rigidbody2D;
        otherRigidbody: Rigidbody2D;
        enabled: boolean;
    }
    interface RaycastHit2D {
        centroid: Vector2D;
        point: Vector2D;
        normal: Vector2D;
        distance: f32;
        fraction: f32;
        collider: Collider2D;
        rigidbody: Rigidbody2D;
        transform: UTransform;
        CompareTo(other: RaycastHit2D): i32;
    }
    interface PhysicsMaterial2D extends UObject {
        bounciness: f32;
        friction: f32;
    }

    interface Rigidbody2D extends UComponent {
        position: Vector2D;
        rotation: f32;
        velocity: Vector2D;
        angularVelocity: f32;
        useAutoMass: boolean;
        mass: f32;
        sharedMaterial: PhysicsMaterial2D;
        centerOfMass: Vector2D;
        worldCenterOfMass: Vector2D;
        inertia: f32;
        drag: f32;
        angularDrag: f32;
        gravityScale: f32;
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
        attachedColliderCount: i32;
        MovePosition(position: Vector2D): void;
        MoveRotation(angle: f32): void;
        IsSleeping(): boolean;
        IsAwake(): boolean;
        Sleep(): void;
        WakeUp(): void;
        IsTouching(collider: Collider2D): boolean;
        IsTouching(collider: Collider2D, contactFilter: ContactFilter2D): boolean;
        IsTouching(contactFilter: ContactFilter2D): boolean;
        IsTouchingLayers(): boolean;
        IsTouchingLayers(layerMask: i32): boolean;
        OverlapPoint(point: Vector2D): boolean;
        Distance(collider: Collider2D): ColliderDistance2D;
        AddForce(force: Vector2D): void;
        AddForce(force: Vector2D, mode: ForceMode2D): void;
        AddRelativeForce(relativeForce: Vector2D): void;
        AddRelativeForce(relativeForce: Vector2D, mode: ForceMode2D): void;
        AddForceAtPosition(force: Vector2D, position: Vector2D): void;
        AddForceAtPosition(force: Vector2D, position: Vector2D, mode: ForceMode2D): void;
        AddTorque(torque: f32): void;
        AddTorque(torque: f32, mode: ForceMode2D): void;
        GetPoint(point: Vector2D): Vector2D;
        GetRelativePoint(relativePoint: Vector2D): Vector2D;
        GetVector(vector: Vector2D): Vector2D;
        GetRelativeVector(relativeVector: Vector2D): Vector2D;
        GetPointVelocity(point: Vector2D): Vector2D;
        GetRelativePointVelocity(relativePoint: Vector2D): Vector2D;
        OverlapCollider(contactFilter: ContactFilter2D, results: Collider2D[]): i32;
        GetContacts(contacts: ContactPoint2D[]): i32;
        GetContacts(contactFilter: ContactFilter2D, contacts: ContactPoint2D[]): i32;
        GetContacts(colliders: Collider2D[]): i32;
        GetContacts(contactFilter: ContactFilter2D, colliders: Collider2D[]): i32;
        GetAttachedColliders(results: Collider2D[]): i32;
        Cast(direction: Vector2D, results: RaycastHit2D[]): i32;
        Cast(direction: Vector2D, results: RaycastHit2D[], distance: f32): i32;
        Cast(direction: Vector2D, contactFilter: ContactFilter2D, results: RaycastHit2D[]): i32;
        Cast(direction: Vector2D, contactFilter: ContactFilter2D, results: RaycastHit2D[], distance: f32): i32;
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