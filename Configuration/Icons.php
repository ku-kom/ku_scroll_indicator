<?php

/**
 * Icon Registry
 */

defined('TYPO3_MODE') || die();

   return [
       // icon identifier
       'ku_scroll_indicator' => [
           'provider' => \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
           'source' => 'EXT:ku_scroll_indicator/Resources/Public/Icons/Extension.svg',
       ],
   ];