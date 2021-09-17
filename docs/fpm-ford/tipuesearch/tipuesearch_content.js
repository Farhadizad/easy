var tipuesearch = {"pages":[{"title":" easy ","text":"easy Developer Info John Doe","tags":"home","loc":"index.html"},{"title":"M_sample.f90 – easy","text":"Contents Modules M_sample Source Code M_sample.f90 Source Code module M_sample implicit none private public :: mysqrt public :: mysin contains elemental pure function mysqrt ( r ) result ( answer ) !> MYSQRT(3f) is a trivial function for demonstration purposes. !  It calls the intrinsic SQRT real , intent ( in ) :: r real :: answer answer = sqrt ( r ) end function mysqrt elemental pure function mysin ( r ) result ( answer ) !> MYSIN(3f) is a trivial function for demonstration purposes. !  It calls the intrinsic SIN real , intent ( in ) :: r real :: answer answer = sin ( r ) end function mysin end module M_sample","tags":"","loc":"sourcefile/m_sample.f90.html"},{"title":"easy.f90 – easy","text":"Contents Modules easy Source Code easy.f90 Source Code module easy implicit none private public :: say_hello contains subroutine say_hello print * , \"Hello, easy!\" end subroutine say_hello end module easy","tags":"","loc":"sourcefile/easy.f90.html"},{"title":"main.f90 – easy","text":"Contents Programs main Source Code main.f90 Source Code program main implicit none print * , \"hello from project easy\" end program main","tags":"","loc":"sourcefile/main.f90.html"},{"title":"check.f90 – easy","text":"Contents Programs check Source Code check.f90 Source Code program check use M_sample , only : mysqrt , mysin implicit none real , parameter :: PI = atan ( 1.0 ) * 4.0 print * , \"Put some tests in here!\" print * , epsilon ( 0.0 ) print * , mysqrt ( 10 0.0 ) print * , PI ! comparing reals print * , mysin ( PI ). eq . 0.0 , mysin ( PI ), 0.0 print * , mysin ( PI / 2.0 ). eq . 1.0 , mysin ( PI / 2.0 ), 1.0 print * , mysin ( PI / 4.0 ) ** 2. eq . 0.5 , mysin ( PI / 4.0 ) ** 2 , 0.5 print * , mysin ( 0.0 ). eq . 0 , mysin ( 0.0 ), 0 end program check","tags":"","loc":"sourcefile/check.f90.html"},{"title":"mysin – easy","text":"public pure elemental function mysin(r) result(answer) Arguments Type Intent Optional Attributes Name real, intent(in) :: r MYSIN(3f) is a trivial function for demonstration purposes. Return Value real Contents Source Code mysin Source Code elemental pure function mysin ( r ) result ( answer ) !> MYSIN(3f) is a trivial function for demonstration purposes. !  It calls the intrinsic SIN real , intent ( in ) :: r real :: answer answer = sin ( r ) end function mysin","tags":"","loc":"proc/mysin.html"},{"title":"mysqrt – easy","text":"public pure elemental function mysqrt(r) result(answer) Arguments Type Intent Optional Attributes Name real, intent(in) :: r MYSQRT(3f) is a trivial function for demonstration purposes. Return Value real Contents Source Code mysqrt Source Code elemental pure function mysqrt ( r ) result ( answer ) !> MYSQRT(3f) is a trivial function for demonstration purposes. !  It calls the intrinsic SQRT real , intent ( in ) :: r real :: answer answer = sqrt ( r ) end function mysqrt","tags":"","loc":"proc/mysqrt.html"},{"title":"say_hello – easy","text":"public subroutine say_hello() Arguments None Contents Source Code say_hello Source Code subroutine say_hello print * , \"Hello, easy!\" end subroutine say_hello","tags":"","loc":"proc/say_hello.html"},{"title":"M_sample – easy","text":"Contents Functions mysin mysqrt Functions public pure elemental function mysin (r) result(answer) Arguments Type Intent Optional Attributes Name real, intent(in) :: r MYSIN(3f) is a trivial function for demonstration purposes. Return Value real public pure elemental function mysqrt (r) result(answer) Arguments Type Intent Optional Attributes Name real, intent(in) :: r MYSQRT(3f) is a trivial function for demonstration purposes. Return Value real","tags":"","loc":"module/m_sample.html"},{"title":"easy – easy","text":"Contents Subroutines say_hello Subroutines public subroutine say_hello () Arguments None","tags":"","loc":"module/easy.html"},{"title":"main – easy","text":"Contents Source Code main Source Code program main implicit none print * , \"hello from project easy\" end program main","tags":"","loc":"program/main.html"},{"title":"check – easy","text":"Uses M_sample Contents Variables PI Source Code check Variables Type Attributes Name Initial real, parameter :: PI = atan(1.0)*4.0 Source Code program check use M_sample , only : mysqrt , mysin implicit none real , parameter :: PI = atan ( 1.0 ) * 4.0 print * , \"Put some tests in here!\" print * , epsilon ( 0.0 ) print * , mysqrt ( 10 0.0 ) print * , PI ! comparing reals print * , mysin ( PI ). eq . 0.0 , mysin ( PI ), 0.0 print * , mysin ( PI / 2.0 ). eq . 1.0 , mysin ( PI / 2.0 ), 1.0 print * , mysin ( PI / 4.0 ) ** 2. eq . 0.5 , mysin ( PI / 4.0 ) ** 2 , 0.5 print * , mysin ( 0.0 ). eq . 0 , mysin ( 0.0 ), 0 end program check","tags":"","loc":"program/check.html"}]}