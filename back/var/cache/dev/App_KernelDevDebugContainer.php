<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerIX4RjXZ\App_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerIX4RjXZ/App_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerIX4RjXZ.legacy');

    return;
}

if (!\class_exists(App_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerIX4RjXZ\App_KernelDevDebugContainer::class, App_KernelDevDebugContainer::class, false);
}

return new \ContainerIX4RjXZ\App_KernelDevDebugContainer([
    'container.build_hash' => 'IX4RjXZ',
    'container.build_id' => '402aba1b',
    'container.build_time' => 1606727762,
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerIX4RjXZ');
