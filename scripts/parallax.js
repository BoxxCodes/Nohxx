function applyParallaxEffect(selector, intensity = 1) {
    const element = document.querySelector(selector);
    if (!element) return;

    element.style.transform = 'translate(-50%, -50%) perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';

    function handleMouseMove(e) {
        const rect = element.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;

        const tiltX = ((offsetX / rect.width - 0.5) * 30) * intensity;
        const tiltY = ((offsetY / rect.height - 0.5) * -30) * intensity;

        const centerDepth = Math.abs(tiltX) + Math.abs(tiltY);

        element.style.transform = `translate(-50%, -50%) perspective(1000px) rotateX(${tiltY}deg) rotateY(${tiltX}deg) scale3d(1, 1, ${1 + (centerDepth / 100) * intensity})`;
    }

    element.addEventListener('mousemove', handleMouseMove);

    element.addEventListener('mouseleave', function () {
        element.style.transition = 'transform 0.1s ease-out';
        element.style.transform = 'translate(-50%, -50%) perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
}

applyParallaxEffect('.square', 1); 

applyParallaxEffect('.square-main', 0.5);
