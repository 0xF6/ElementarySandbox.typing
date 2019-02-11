declare global
{
    type PressedButton = "Left" | "Right" | "Middle";

    /**
     * Element that can be used for screen rendering.
     */
    interface Canvas extends UBehaviour
    {
        renderMode: RenderMode;
        isRootCanvas: boolean;
        scaleFactor: float;
        referencePixelsPerUnit: float;
        overridePixelPerfect: boolean;
        pixelPerfect: boolean;
        planeDistance: float;
        renderOrder: int;
        overrideSorting: boolean;
        sortingOrder: int;
        targetDisplay: int;
        sortingLayerID: int;
        cachedSortingLayerValue: int;
        additionalShaderChannels: AdditionalCanvasShaderChannels;
        sortingLayerName: string;
        rootCanvas: Canvas;
        worldCamera: UCamera;
        normalizedSortingGridSize: float;
        sortingGridNormalizedSize: int;
    }
    enum AdditionalCanvasShaderChannels
    {
        None = 0,
        TexCoord1 = 1,
        TexCoord2 = 2,
        TexCoord3 = 4,
        Normal = 8,
        Tangent = 16,
    }
    enum RenderMode
    {
        ScreenSpaceOverlay = 0,
        ScreenSpaceCamera = 1,
        WorldSpace = 2,
    }
    
    
    interface CanvasRenderer extends UComponent
    {
        hasPopInstruction: boolean;
        materialCount: int;
        popMaterialCount: int;
        absoluteDepth: int;
        hasMoved: boolean;
        cullTransparentMesh: boolean;
        hasRectClipping: boolean;
        relativeDepth: int;
        cull: boolean;
        isMask: boolean;
        SetColor(color: Color): void;
        GetColor(): Color;
        DisableRectClipping(): void;
        Clear(): void;
        GetAlpha(): float;
        SetAlpha(alpha: float): void;
        GetInheritedAlpha(): float;
    }
    
    interface UIBehaviour extends MonoBehaviour
    {
        IsActive(): boolean;
        IsDestroyed(): boolean;
    }
    
    interface CanvasScaler extends UIBehaviour
    {
        uiScaleMode: ScaleMode;
        referencePixelsPerUnit: float;
        scaleFactor: float;
        referenceResolution: UVector2D;
        screenMatchMode: ScreenMatchMode;
        matchWidthOrHeight: float;
        physicalUnit: Unit;
        fallbackScreenDPI: float;
        defaultSpriteDPI: float;
        dynamicPixelsPerUnit: float;
    }
    enum Unit
    {
        Centimeters = 0,
        Millimeters = 1,
        Inches = 2,
        Points = 3,
        Picas = 4,
    }
    enum ScreenMatchMode
    {
        MatchWidthOrHeight = 0,
        Expand = 1,
        Shrink = 2,
    }
    enum ScaleMode
    {
        ConstantPixelSize = 0,
        ScaleWithScreenSize = 1,
        ConstantPhysicalSize = 2,
    }


    interface SpriteRender { }
    interface GraphicRaycaster { }
    
    interface Selectable {
        interactable: boolean;
    }
    
    interface UButton extends Selectable {
        onClick: UnityEvent;
    }
    interface RaycastResult
    {
        distance: float;
        /**
         * Hit index.
         */
        index: float;
        /**
         * The relative depth of the element.
         */
        depth: int;
        /**
         * The SortingLayer of the hit object.
         */
        sortingLayer: int;
        /**
         * The SortingOrder for the hit object.
         */
         sortingOrder: int;
        /**
         * The world position of the where the raycast has hit.
         */
         worldPosition: UVector3D;
        /**
         * The normal at the hit location of the raycast.
         */
         worldNormal: UVector3D;
        /**
         * The screen position from which the raycast was generated.
         */
         screenPosition: UVector2D;
        /**
         * The GameObject that was hit by the raycast.
         */
         gameObject: UGameObject;
        /**
         * Is there an associated module and a hit GameObject.
         */
         isValid: boolean;
    }
    
    interface PointerEventData
    {
         pointerEnter: UGameObject;
         lastPress: UGameObject;
         rawPointerPress: UGameObject;
         pointerDrag: UGameObject;
         pointerCurrentRaycast: RaycastResult;
         pointerPressRaycast: RaycastResult;
    
         pointerId: int;
         position: UVector2D;
         delta: UVector2D;
         pressPosition: UVector2D;
         scrollDelta: UVector2D;
         useDragThreshold: boolean;
         dragging: boolean;
    
         clickTime: float;
         clickCount: float;
    
         button: PressedButton;
    
         IsPointerMoving(): boolean;
         IsScrolling(): boolean;
    
         enterEventCamera: UCamera;
         pressEventCamera: UCamera;
    
         pointerPress: UGameObject;
    }
}
export {}