<?php

/**
 * Extension Manager/Repository config file for ext "ku_scroll_indicator".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 'KU scroll indicator',
    'description' => 'Adds scroll progress bar at the top of the page.',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'bootstrap_package' => '12.0.0-12.9.99',
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'UniversityOfCopenhagen\\KuScrollIndicator\\' => 'Classes',
        ],
    ],
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Nanna Ellegaard',
    'author_email' => 'nel@adm.ku.dk',
    'author_company' => 'University of Copenhagen',
    'version' => '1.0.3',
];
